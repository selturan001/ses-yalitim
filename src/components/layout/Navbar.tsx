'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';
import SearchBar from '@/components/search/SearchBar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    ARNEE
                </Link>

                <div className={styles.desktopMenu}>
                    <Link href="/hakkimizda" className={styles.link}>Hakkımızda</Link>
                    <Link href="/urunler/air-mesh" className={styles.link}>Ürünler</Link>
                    <Link href="/cozumler" className={styles.link}>Çözümler</Link>
                    <Link href="/konfigurator" className={styles.linkHighlight}>HESAPLA</Link>
                    <Link href="/teknoloji" className={styles.link}>Teknoloji</Link>
                    <Link href="/iletisim" className={styles.link}>İletişim</Link>
                </div>

                <div className={styles.actions}>
                    <SearchBar />
                    <Link href="/hesabim" className={styles.iconButton} aria-label="Hesabım">
                        <User size={24} />
                    </Link>
                    <button
                        className={styles.iconButton}
                        onClick={() => toggleCart()}
                        aria-label="Sepet"
                    >
                        <ShoppingBag size={24} />
                        {cartCount > 0 && (
                            <span className={styles.badge}>{cartCount}</span>
                        )}
                    </button>

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && ( // Changed isOpen to isMobileMenuOpen
                <div className={styles.mobileMenu}>
                    <Link href="/hakkimizda" className={styles.mobileLink} onClick={toggleMenu}>Hakkımızda</Link>
                    <Link href="/urunler/air-mesh" className={styles.mobileLink} onClick={toggleMenu}>Ürünler</Link>
                    <Link href="/cozumler" className={styles.mobileLink} onClick={toggleMenu}>Çözümler</Link>
                    <Link href="/konfigurator" className={styles.mobileLinkHighlight} onClick={toggleMenu}>HESAPLA</Link>
                    <Link href="/teknoloji" className={styles.mobileLink} onClick={toggleMenu}>Teknoloji</Link>
                    <Link href="/iletisim" className={styles.mobileLink} onClick={toggleMenu}>İletişim</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
