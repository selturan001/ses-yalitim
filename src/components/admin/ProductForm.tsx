'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './ProductForm.module.css';

interface ProductData {
    name: string;
    slug: string;
    price: number | string;
    stock: number | string;
    description: string;
    image: string;
    color: string;
    colorHex: string;
}

interface ProductFormProps {
    initialData?: ProductData;
    isEdit?: boolean;
}

export default function ProductForm({ initialData, isEdit = false }: ProductFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<ProductData>(initialData || {
        name: '',
        slug: '',
        price: '',
        stock: '',
        description: '',
        image: '',
        color: 'Standart',
        colorHex: '#000000'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from name if creating new and slug is empty
        if (!isEdit && name === 'name' && !formData.slug) {
            const slug = value.toLowerCase()
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/[^a-z0-9]/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');
            setFormData(prev => ({ ...prev, slug }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        if (!formData.name || !formData.slug || !formData.price) {
            alert('Lütfen zorunlu alanları doldurun.');
            setLoading(false);
            return;
        }

        try {
            const url = isEdit ? `/api/products/${initialData?.slug}` : '/api/products';
            const method = isEdit ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/admin/products');
                router.refresh();
            } else {
                const err = await res.json();
                alert(`Hata: ${err.error || 'İşlem başarısız.'}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
                    <Link href="/admin/products" className={styles.backLink}>
                        <ArrowLeft size={24} />
                    </Link>
                    <h1>{isEdit ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}</h1>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={styles.saveButton}
                >
                    <Save size={20} />
                    <span>{loading ? 'Kaydediliyor...' : 'Kaydet'}</span>
                </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.formGrid}>
                <div className={styles.card}>
                    <h2>Temel Bilgiler</h2>
                    <div className={styles.field}>
                        <label>Ürün Adı *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Örn: Akustik Panel"
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Slug (URL) *</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            placeholder="orn-akustik-panel"
                            readOnly={isEdit} // Prevent changing slug on edit usually, or allow with caution
                            className={isEdit ? styles.readOnly : ''}
                        />
                        <span className={styles.hint}>Ürün linki: arnee.com/urunler/{formData.slug}</span>
                    </div>
                    <div className={styles.field}>
                        <label>Açıklama</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                        />
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.card}>
                        <h2>Fiyat & Stok</h2>
                        <div className={styles.field}>
                            <label>Fiyat (Kuruş) *</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                placeholder="10000 (= 100.00 TL)"
                            />
                            <span className={styles.hint}>100 TL için 10000 yazın.</span>
                        </div>
                        <div className={styles.field}>
                            <label>Stok Adedi</label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Görsel & Renk</h2>
                        <div className={styles.field}>
                            <label>Görsel URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="https://..."
                            />
                            {formData.image && (
                                <img src={formData.image} alt="Preview" className={styles.imagePreview} />
                            )}
                        </div>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Renk Adı</label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Renk Kodu</label>
                                <div className={styles.colorInputWrapper}>
                                    <input
                                        type="color"
                                        name="colorHex"
                                        value={formData.colorHex}
                                        onChange={handleChange}
                                        className={styles.colorPicker}
                                    />
                                    <input
                                        type="text"
                                        name="colorHex"
                                        value={formData.colorHex}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
