'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TrendingUp, ShoppingBag, Package, Users, ArrowRight } from 'lucide-react';
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        totalProducts: 0,
        recentOrders: [] as any[]
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const [ordersRes, productsRes] = await Promise.all([
                    fetch('/api/orders'),
                    fetch('/api/products')
                ]);

                const orders = await ordersRes.json();
                const products = await productsRes.json();

                const totalRevenue = orders.reduce((acc: number, order: any) => acc + order.total, 0);

                setStats({
                    totalRevenue,
                    totalOrders: orders.length,
                    totalProducts: products.length,
                    recentOrders: orders.slice(0, 5) // Last 5 orders
                });
            } catch (error) {
                console.error('Dashboard data fetch failed', error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    if (loading) return <div className={styles.loading}>Yükleniyor...</div>;

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1>Genel Bakış</h1>
                <p>Hoş geldin, Admin. İşte bugünün özeti.</p>
            </div>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={`${styles.iconBox} ${styles.blue}`}>
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <span className={styles.statLabel}>Toplam Ciro</span>
                        <h3 className={styles.statValue}>
                            {(stats.totalRevenue / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺
                        </h3>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={`${styles.iconBox} ${styles.purple}`}>
                        <ShoppingBag size={24} />
                    </div>
                    <div>
                        <span className={styles.statLabel}>Toplam Sipariş</span>
                        <h3 className={styles.statValue}>{stats.totalOrders}</h3>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={`${styles.iconBox} ${styles.orange}`}>
                        <Package size={24} />
                    </div>
                    <div>
                        <span className={styles.statLabel}>Aktif Ürünler</span>
                        <h3 className={styles.statValue}>{stats.totalProducts}</h3>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Son Siparişler</h2>
                    <Link href="/admin/orders" className={styles.link}>
                        Tümünü Gör <ArrowRight size={16} />
                    </Link>
                </div>
                <div className={styles.tableCard}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Müşteri</th>
                                <th>Tutar</th>
                                <th>Durum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.recentOrders.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className={styles.empty}>Sipariş Yok</td>
                                </tr>
                            ) : (
                                stats.recentOrders.map(order => (
                                    <tr key={order.id}>
                                        <td className={styles.mono}>{order.orderNumber}</td>
                                        <td>{order.customerName}</td>
                                        <td>{(order.total / 100).toLocaleString('tr-TR')} ₺</td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[order.status]}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
