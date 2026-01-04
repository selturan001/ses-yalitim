'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';
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

const ORDER_STATUSES = {
    PENDING: { label: 'Bekliyor', color: '#fbbf24', icon: Clock },
    PAID: { label: 'Ödendi', color: '#3b82f6', icon: CheckCircle },
    PROCESSING: { label: 'Hazırlanıyor', color: '#8b5cf6', icon: Package },
    SHIPPED: { label: 'Kargolandı', color: '#f59e0b', icon: Truck },
    DELIVERED: { label: 'Teslim Edildi', color: '#10b981', icon: CheckCircle },
    CANCELLED: { label: 'İptal', color: '#ef4444', icon: XCircle },
};

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
    const [updating, setUpdating] = useState<string | null>(null);

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

    const handleStatusChange = async (orderId: string, newStatus: string) => {
        setUpdating(orderId);
        try {
            const res = await fetch(`/api/orders/${orderId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                // Optimistic update
                setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
            } else {
                alert('Durum güncellenemedi.');
            }
        } catch (error) {
            console.error('Update failed', error);
            alert('Bir hata oluştu.');
        } finally {
            setUpdating(null);
        }
    };

    if (loading) return <div className={styles.loading}>Yükleniyor...</div>;

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1>Sipariş Yönetimi</h1>
                    <p className={styles.subtitle}>Toplam {orders.length} sipariş listeleniyor</p>
                </div>
                <button onClick={fetchOrders} className={styles.refreshBtn}>Yenile</button>
            </div>

            <div className={styles.tableCard}>
                <div className={styles.tableWrapper}>
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
                                    <td colSpan={6} className={styles.emptyState}>
                                        Henüz sipariş bulunmuyor.
                                    </td>
                                </tr>
                            ) : (
                                orders.map(order => (
                                    <>
                                        <tr key={order.id} className={expandedOrder === order.id ? styles.activeRow : ''}>
                                            <td className={styles.mono}>{order.orderNumber}</td>
                                            <td className={styles.customerName}>{order.customerName}</td>
                                            <td>
                                                <div className={styles.date}>
                                                    {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                                                </div>
                                                <small className={styles.time}>
                                                    {new Date(order.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                                                </small>
                                            </td>
                                            <td className={styles.price}>
                                                {(order.total / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺
                                            </td>
                                            <td>
                                                <div className={styles.statusWrapper}>
                                                    <select
                                                        value={order.status}
                                                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                        className={styles.statusSelect}
                                                        style={{
                                                            color: ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES]?.color || '#000',
                                                            borderColor: ORDER_STATUSES[order.status as keyof typeof ORDER_STATUSES]?.color || '#ddd'
                                                        }}
                                                        disabled={updating === order.id}
                                                    >
                                                        {Object.entries(ORDER_STATUSES).map(([key, config]) => (
                                                            <option key={key} value={key}>
                                                                {config.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {updating === order.id && <span className={styles.spinner}>↻</span>}
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className={styles.iconBtn}
                                                    onClick={() => toggleDetails(order.id)}
                                                    title="Detayları Göster"
                                                >
                                                    {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </button>
                                            </td>
                                        </tr>
                                        {expandedOrder === order.id && (
                                            <tr className={styles.detailsRow}>
                                                <td colSpan={6}>
                                                    <div className={styles.detailsContainer}>
                                                        <h4 className={styles.detailsTitle}>Sipariş İçeriği</h4>
                                                        <div className={styles.itemsGrid}>
                                                            {order.items.map(item => (
                                                                <div key={item.id} className={styles.itemCard}>
                                                                    <div className={styles.itemHeader}>
                                                                        <span className={styles.itemName}>{item.product.name}</span>
                                                                        <span className={styles.itemQty}>x{item.quantity}</span>
                                                                    </div>
                                                                    <div className={styles.itemPrice}>
                                                                        {((item.price * item.quantity) / 100).toLocaleString('tr-TR')} ₺
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className={styles.detailsFooter}>
                                                            <div className={styles.infoGroup}>
                                                                <label>Teslimat Adresi:</label>
                                                                <p>Veri tabanından çekilecek...</p>
                                                            </div>
                                                        </div>
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
