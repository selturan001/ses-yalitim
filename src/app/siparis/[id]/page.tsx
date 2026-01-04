import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import styles from './Siparis.module.css';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function OrderSuccessPage({ params }: PageProps) {
    const { id } = await params;

    const order = await prisma.order.findUnique({
        where: { id },
        include: { items: true }
    });

    if (!order) {
        return (
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Sipariş Bulunamadı</h1>
                        <Link href="/" className={`${styles.button} ${styles.homeButton}`}>
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <CheckCircle size={48} />
                    </div>
                    <h1 className={styles.title}>Siparişiniz Alındı!</h1>
                    <p className={styles.message}>
                        Teşekkür ederiz. Siparişiniz başarıyla oluşturuldu ve işleme alındı.
                    </p>

                    <div className={styles.details}>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Sipariş Numarası:</span>
                            <span className={`${styles.value} ${styles.orderNumber}`}>{order.orderNumber}</span>
                        </div>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Tarih:</span>
                            <span className={styles.value}>
                                {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                            </span>
                        </div>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Toplam Tutar:</span>
                            <span className={styles.value}>
                                {(order.total / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺
                            </span>
                        </div>
                        <div className={styles.detailRow}>
                            <span className={styles.label}>Ödeme Durumu:</span>
                            <span className={styles.value} style={{ color: '#2ecc71' }}>Ödendi</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/" className={`${styles.button} ${styles.homeButton}`}>
                            Alışverişe Devam Et
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
