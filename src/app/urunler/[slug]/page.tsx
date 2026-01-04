'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import styles from './ProductDetail.module.css';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    colorHex: string;
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = use(params).slug; // Unwrapping params with use() for Next.js 15 compatibility
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`/api/products/${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setProduct({
                        ...data,
                        price: data.price / 100 // Convert cents
                    });
                }
            } catch (error) {
                console.error('Failed to fetch product');
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [slug]);

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        if (!product) return;

        // Add item multiple times or update context to handle bulk add
        // Since our context adds 1 by 1 or inc, let's just loop for now or manually call a bulk add if we had it.
        // Actually, let's checking CartContext... 
        // Our cart context `addToCart` only takes item and assumes qty 1, but handles duplicates by incrementing.
        // To support adding N items, we should update context or just loop. Looping is dirty.
        // Let's just add 1 for now to keep it simple or update context later. 
        // Wait, the logic confirms "Add to Cart" usually adds 1.
        // But the UI has a quantity selector.

        // FOR NOW: Just add 1 regardless of selector (Limitation) OR 
        // Update context to support quantity. 
        // Let's update `addToCart` logic in context in a future step if needed. 
        // For this demo, let's loop (hacky but works for instant gratification)

        for (let i = 0; i < quantity; i++) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                colorHex: product.colorHex
            });
        }
        // Ideally we should pass quantity to addToCart

        // Reset qty
        setQuantity(1);
    };

    if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Yükleniyor...</div>;
    if (!product) return <div style={{ padding: '100px', textAlign: 'center' }}>Ürün bulunamadı.</div>;

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Ana Sayfa</Link> <span>/</span>
                    <Link href="/#shop">Ürünler</Link> <span>/</span>
                    <span style={{ color: 'var(--color-text-primary)' }}>{product.name}</span>
                </div>

                <div className={styles.grid}>
                    {/* Left: Image */}
                    <div className={styles.imageSection}>
                        <div className={styles.mainImageWrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles.productImage}
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className={styles.infoSection}>
                        <h1 className={styles.title}>{product.name}</h1>
                        <div className={styles.price}>{product.price.toLocaleString('tr-TR')} ₺</div>

                        <p className={styles.description}>
                            {product.description}
                            <br /><br />
                            Arnee Air Mesh teknolojisi ile mekanınızın akustiğini mükemmelleştirirken,
                            {product.name} rengi ile estetik bir dokunuş katın. Profesyonel stüdyolar,
                            ofisler ve ev sinema sistemleri için idealdir.
                        </p>

                        <div className={styles.actions}>
                            <div className={styles.quantityWrapper}>
                                <span className={styles.label}>Adet</span>
                                <div className={styles.quantityControls}>
                                    <button onClick={() => handleQuantityChange(-1)} className={styles.qtyBtn}>
                                        <Minus size={16} />
                                    </button>
                                    <span className={styles.qtyValue}>{quantity}</span>
                                    <button onClick={() => handleQuantityChange(1)} className={styles.qtyBtn}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <button onClick={handleAddToCart} className={styles.addToCartBtn}>
                                <ShoppingBag size={20} />
                                Sepete Ekle
                            </button>
                        </div>

                        {/* Specs */}
                        <div className={styles.specsContainer}>
                            <h3 className={styles.specsTitle}>Teknik Özellikler</h3>
                            <table className={styles.specsTable}>
                                <tbody>
                                    <tr>
                                        <td>Boyutlar</td>
                                        <td>60 x 60 x 4 cm</td>
                                    </tr>
                                    <tr>
                                        <td>Malzeme</td>
                                        <td>Yüksek Yoğunluklu Akustik Sünger</td>
                                    </tr>
                                    <tr>
                                        <td>Kaplama</td>
                                        <td>Air Mesh Kumaş</td>
                                    </tr>
                                    <tr>
                                        <td>NRC Değeri</td>
                                        <td>0.95 (Sınıf A)</td>
                                    </tr>
                                    <tr>
                                        <td>Yangın Sınıfı</td>
                                        <td>B1 (Alev Yürütmez)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
