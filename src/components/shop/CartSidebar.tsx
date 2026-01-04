'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartSidebar.module.css';

const CartSidebar = () => {
    const {
        isCartOpen,
        toggleCart,
        items,
        updateQuantity,
        removeFromCart,
        cartTotal,
        cartCount
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div
                className={`${styles.overlay} ${isCartOpen ? styles.open : ''}`}
                onClick={toggleCart}
            />
            <div className={`${styles.sidebar} ${isCartOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Sepetim
                        <span className={styles.itemCount}>({cartCount} ürün)</span>
                    </h2>
                    <button onClick={toggleCart} className={styles.closeButton}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.content}>
                    {items.length === 0 ? (
                        <div className={styles.emptyState}>
                            <ShoppingBag size={48} className={styles.emptyIcon} />
                            <p>Sepetinizde ürün bulunmuyor.</p>
                            <button onClick={toggleCart} className={styles.continueShopping}>
                                Alışverişe Başla
                            </button>
                        </div>
                    ) : (
                        <div className={styles.itemsList}>
                            {items.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <div className={styles.itemImageContainer}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className={styles.itemImage}
                                        />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <div className={styles.itemHeader}>
                                            <h3 className={styles.itemName}>{item.name}</h3>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className={styles.removeItem}
                                            >
                                                Sil
                                            </button>
                                        </div>
                                        <div className={styles.itemVariant}>
                                            <div
                                                className={styles.colorDot}
                                                style={{ backgroundColor: item.colorHex }}
                                            />
                                            Renk
                                        </div>
                                        <div className={styles.itemFooter}>
                                            <div className={styles.quantityControls}>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className={styles.qtyValue}>{item.quantity}</span>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <span className={styles.itemPrice}>
                                                {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.summaryRow}>
                            <span className={styles.totalLabel}>Toplam</span>
                            <span className={styles.totalValue}>
                                {cartTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺
                            </span>
                        </div>
                        <Link href="/odeme" className={styles.checkoutButton} onClick={toggleCart}>
                            Ödeme Yap
                        </Link>
                        <button onClick={toggleCart} className={styles.continueShopping}>
                            Alışverişe Devam Et
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
