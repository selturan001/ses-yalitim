'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Edit2, Trash2, Plus } from 'lucide-react';
import styles from './AdminProducts.module.css';

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    stock: number;
    image: string;
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchProducts() {
        setLoading(true);
        try {
            const res = await fetch('/api/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (error) {
            console.error('Failed to fetch products', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    async function handleDelete(slug: string) {
        if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;

        try {
            const res = await fetch(`/api/products/${slug}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setProducts(products.filter(p => p.slug !== slug));
            } else {
                alert('Silme işlemi başarısız oldu.');
            }
        } catch (error) {
            console.error('Delete failed', error);
            alert('Bir hata oluştu.');
        }
    }

    if (loading) return <div className={styles.loading}>Yükleniyor...</div>;

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <h1>Ürün Yönetimi</h1>
                <Link href="/admin/products/new" className={styles.addButton}>
                    <Plus size={20} />
                    <span>Yeni Ürün Ekle</span>
                </Link>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ width: '80px' }}>Resim</th>
                            <th>Ürün Adı</th>
                            <th>Fiyat</th>
                            <th>Stok</th>
                            <th style={{ width: '120px' }}>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.name} className={styles.thumb} />
                                </td>
                                <td>
                                    <div className={styles.productName}>{product.name}</div>
                                    <div className={styles.productSlug}>{product.slug}</div>
                                </td>
                                <td>{(product.price / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</td>
                                <td>
                                    <span className={`${styles.stock} ${product.stock < 10 ? styles.lowStock : ''}`}>
                                        {product.stock} Adet
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <Link href={`/admin/products/edit/${product.slug}`} className={styles.actionBtn}>
                                            <Edit2 size={18} />
                                        </Link>
                                        <button onClick={() => handleDelete(product.slug)} className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
