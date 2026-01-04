'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Package, ShoppingBag, LogOut, LayoutDashboard } from 'lucide-react';
import { signOut } from 'next-auth/react';
import styles from './AdminSidebar.module.css';

export default function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h2>Arnee Admin</h2>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/admin/orders" className={`${styles.link} ${isActive('/admin/orders') ? styles.active : ''}`}>
                            <ShoppingBag size={20} />
                            <span>Siparişler</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/products" className={`${styles.link} ${isActive('/admin/products') ? styles.active : ''}`}>
                            <Package size={20} />
                            <span>Ürünler</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.footer}>
                <button onClick={() => signOut({ callbackUrl: '/hesabim/giris' })} className={styles.logoutBtn}>
                    <LogOut size={20} />
                    <span>Çıkış Yap</span>
                </button>
            </div>
        </aside>
    );
}
