'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './Odeme.module.css';
import { generateDistanceSalesContract, generatePreliminaryForm } from '@/lib/contracts';
import Modal from '@/components/ui/Modal';

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    // Actually Context usually provides 'items'. Let's stick to 'items'.
    // Re-checking useCart signature from Context file memory: it exports 'items'.

    // NOTE: In previous steps we saw 'items' used.

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Contract States
    const [contractsAccepted, setContractsAccepted] = useState(false);
    const [showModal, setShowModal] = useState<'none' | 'dist' | 'pre'>('none');
    const [modalContent, setModalContent] = useState('');

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleViewContract = (type: 'dist' | 'pre') => {
        // use 'items' here
        const currentItems = items;
        const customer = formData;

        let content = '';
        if (type === 'dist') {
            content = generateDistanceSalesContract(customer, currentItems, cartTotal);
        } else {
            content = generatePreliminaryForm(customer, currentItems, cartTotal);
        }

        setModalContent(content);
        setShowModal(type);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!contractsAccepted) {
            alert('Lütfen Mesafeli Satış Sözleşmesi ve Ön Bilgilendirme Formu\'nu onaylayın.');
            return;
        }

        setLoading(true);

        try {
            // Initialize Payment
            const res = await fetch('/api/payment/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer: formData,
                    items: items,
                    total: cartTotal
                })
            });

            const result = await res.json();

            if (result.status === 'success' && result.paymentPageUrl) {
                // Redirect to iyzico
                window.location.href = result.paymentPageUrl;
            } else if (result.status === 'failure') {
                alert('Ödeme başlatılamadı: ' + result.errorMessage + ' (API Anahtarları Eksik olabilir)');
            } else {
                alert('Bir hata oluştu. Lütfen tekrar deneyin.');
            }

        } catch (error) {
            console.error('Checkout error:', error);
            alert('Sistem hatası.');
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', gridColumn: '1/-1' }}>
                        <h1>Sepetiniz Boş</h1>
                        <p>Lütfen önce sepete ürün ekleyin.</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Sol Taraf - Adres Formu */}
                <div className={styles.formSection}>
                    <h2 className={styles.title}>Teslimat Bilgileri</h2>
                    <form id="checkout-form" onSubmit={handleSubmit} className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Ad</label>
                            <input
                                required
                                name="firstName"
                                className={styles.input}
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Soyad</label>
                            <input
                                required
                                name="lastName"
                                className={styles.input}
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>E-posta</label>
                            <input
                                required
                                type="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Telefon</label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Adres</label>
                            <input
                                required
                                name="address"
                                className={styles.input}
                                placeholder="Mahalle, Sokak, No..."
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Şehir</label>
                            <input
                                required
                                name="city"
                                className={styles.input}
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Posta Kodu</label>
                            <input
                                required
                                name="zipCode"
                                className={styles.input}
                                value={formData.zipCode}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Ödeme Yöntemi */}
                        <div className={`${styles.fullWidth} ${styles.paymentMethod}`}>
                            <h3 className={styles.title} style={{ fontSize: '1.4rem', border: 'none' }}>Ödeme Yöntemi</h3>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="payment" defaultChecked />
                                    <span>Kredi Kartı (iyzico Güvencesiyle)</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Sağ Taraf - Sipariş Özeti */}
                <div className={styles.summarySection}>
                    <h2 className={styles.summaryTitle}>Sipariş Özeti</h2>
                    <div className={styles.itemsList}>
                        {items.map(item => (
                            <div key={item.id} className={styles.summaryItem}>
                                <span className={styles.itemName}>
                                    {item.quantity}x {item.name}
                                </span>
                                <span className={styles.itemPrice}>
                                    {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.row}>
                        <span>Ara Toplam</span>
                        <span>{(cartTotal / 100).toLocaleString('tr-TR')} ₺</span>
                    </div>
                    <div className={styles.row}>
                        <span>Kargo</span>
                        <span>Ücretsiz</span>
                    </div>

                    <div className={styles.totalRow}>
                        <span>Toplam</span>
                        <span>{(cartTotal / 100).toLocaleString('tr-TR')} ₺</span>
                    </div>

                    <div className={styles.contracts}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={contractsAccepted}
                                onChange={(e) => setContractsAccepted(e.target.checked)}
                                required
                            />
                            <span>
                                <button type="button" className={styles.linkBtn} onClick={() => handleViewContract('pre')}>Ön Bilgilendirme Formu</button>'nu ve <button type="button" className={styles.linkBtn} onClick={() => handleViewContract('dist')}>Mesafeli Satış Sözleşmesi</button>'ni okudum, onaylıyorum.
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        form="checkout-form"
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        {loading ? 'İşleniyor...' : 'Ödemeyi Tamamla'}
                    </button>

                    <p style={{ marginTop: '15px', fontSize: '0.8rem', color: '#888', textAlign: 'center' }}>
                        Güvenli Ödeme Altyapısı
                    </p>
                </div>
            </div>

            <Modal
                isOpen={showModal !== 'none'}
                onClose={() => setShowModal('none')}
                title={showModal === 'dist' ? 'Mesafeli Satış Sözleşmesi' : 'Ön Bilgilendirme Formu'}
            >
                <div dangerouslySetInnerHTML={{ __html: modalContent }} />
            </Modal>
        </main>
    );
}
