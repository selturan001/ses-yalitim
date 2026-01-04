'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    colorHex: string;
}

const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('/api/products');
                if (res.ok) {
                    const data = await res.json();
                    // Convert raw price (cents) to float if needed or handle in component
                    // Our seed data stored 19900 for 199.00
                    const formattedData = data.map((p: any) => ({
                        ...p,
                        price: p.price / 100 // Convert cents to lira unit
                    }));
                    setProducts(formattedData);
                }
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.loading}>Yükleniyor...</div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section} id="shop">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Renklerin <span className={styles.highlight}>Sessizliği</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Mekanınızın ruhuna uygun rengi seçin. Hepsi aynı üstün akustik performansla.
                    </p>
                </div>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
