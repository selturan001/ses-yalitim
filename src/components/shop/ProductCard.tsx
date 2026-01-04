'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    colorHex: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            colorHex: product.colorHex
        });
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Link href={`/urunler/${product.id}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href={`/urunler/${product.id}`} className={styles.link}>
                        <h3 className={styles.name}>{product.name}</h3>
                    </Link>
                    <div
                        className={styles.colorBadge}
                        style={{ backgroundColor: product.colorHex }}
                        title="Renk"
                    />
                </div>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>{product.price.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</span>
                    <button className={styles.addButton} onClick={handleAddToCart} aria-label="Sepete Ekle">
                        <ShoppingBag size={18} />
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
