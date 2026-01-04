'use client';

import { useEffect, useState } from 'react';
import styles from './AdminOrders.module.css';

interface OrderItem {
    id: string;
    product: {
        name: string;
    };
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    orderNumber: string;
    customerName: string;
    total: number;
    status: string;
    createdAt: string;
    items: OrderItem[];
}

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

    async function fetchOrders() {
        setLoading(true);
        try {
            const res = await fetch('/api/orders');
            if (res.ok) {
                const data = await res.json();
                setOrders(data);
            }
        } catch (error) {
            console.error('Failed to fetch orders', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const toggleDetails = (orderId: string) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Yükleniyor...</div>;

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Sipariş Yönetimi</h1>
                    <button onClick={fetchOrders} className={styles.refreshButton}>Yenile</button>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Sipariş No</th>
                                <th>Müşteri</th>
                                <th>Tarih</th>
                                <th>Tutar</th>
                                <th>Durum</th>
                                <th>Detay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan={6} style={{ textAlign: 'center' }}>Henüz sipariş bulunmuyor.</td>
                                </tr>
                            ) : (
                                orders.map(order => (
                                    <>
                                        <tr key={order.id}>
                                            <td style={{ fontFamily: 'monospace' }}>{order.orderNumber}</td>
                                            <td>{order.customerName}</td>
                                            <td>{new Date(order.createdAt).toLocaleDateString('tr-TR')} {new Date(order.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</td>
                                            <td>{(order.total / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</td>
                                            <td>
                                                <span className={`${styles.status} ${styles[`status-${order.status}`] || ''}`}>
                                                    {order.status === 'PAID' ? 'Ödendi' : order.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    className={styles.detailsButton}
                                                    onClick={() => toggleDetails(order.id)}
                                                >
                                                    {expandedOrder === order.id ? 'Kapat' : 'Göster'}
                                                </button>
                                            </td>
                                        </tr>
                                        {expandedOrder === order.id && (
                                            <tr className={styles.itemsRow}>
                                                <td colSpan={6}>
                                                    <div className={styles.itemsList}>
                                                        <strong>Sipariş İçeriği:</strong>
                                                        {order.items.map(item => (
                                                            <div key={item.id} className={styles.item}>
                                                                <span>{item.quantity}x {item.product.name}</span>
                                                                <span>{((item.price * item.quantity) / 100).toLocaleString('tr-TR')} ₺</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
