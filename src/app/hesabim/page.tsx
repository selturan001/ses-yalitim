'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Dashboard.module.css';

interface Order {
    id: string;
    orderNumber: string;
    createdAt: string;
    total: number;
    status: string;
}

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/hesabim/giris');
        }

        if (status === 'authenticated') {
            // Fetch user orders
            fetch('/api/orders/me')
                .then(res => {
                    if (res.ok) return res.json();
                    throw new Error('Failed');
                })
                .then(data => setOrders(data))
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [status, router]);

    if (status === 'loading' || loading) {
        return <div style={{ padding: '140px', textAlign: 'center' }}>Yükleniyor...</div>;
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Hesabım</h1>
                    <button onClick={() => signOut({ callbackUrl: '/' })} className={styles.logoutBtn}>
                        Çıkış Yap
                    </button>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Profil Bilgileri</h2>
                    <div className={styles.userInfo}>
                        <div><strong>Ad Soyad:</strong> {session?.user?.name}</div>
                        <div><strong>E-posta:</strong> {session?.user?.email}</div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Sipariş Geçmişi</h2>
                    {orders.length > 0 ? (
                        <table className={styles.ordersTable}>
                            <thead>
                                <tr>
                                    <th>Sipariş No</th>
                                    <th>Tarih</th>
                                    <th>Tutar</th>
                                    <th>Durum</th>
                                    <th>Detay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.orderNumber}</td>
                                        <td>{new Date(order.createdAt).toLocaleDateString('tr-TR')}</td>
                                        <td>{(order.total / 100).toLocaleString('tr-TR')} ₺</td>
                                        <td>
                                            <span className={`${styles.status} ${styles['status_' + order.status]}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>
                                            <Link href={`/siparis/${order.id}`}>Görüntüle</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className={styles.empty}>
                            Henüz siparişiniz bulunmuyor. <Link href="/#shop" className={styles.browseLink}>Alışverişe Başla</Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
