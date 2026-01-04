import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContainer}>
                    <div className={styles.newsletterContent}>
                        <h3>Arnee Bülten</h3>
                        <p>Akustik tasarım ipuçları ve yeni ürünlerden haberdar olun.</p>
                    </div>
                    <div className={styles.newsletterForm}>
                        <input type="email" placeholder="E-posta adresiniz" className={styles.input} />
                        <button className={styles.subscribeBtn}>Abone Ol</button>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.column}>
                    <Link href="/" className={styles.logo}>ARNEE</Link>
                    <p className={styles.tagline}>Sessizliğin Mimarı</p>
                    <p className={styles.description}>
                        Air Mesh teknolojisi ile mekanlarınız için premium ses yalıtım çözümleri sunuyoruz.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Kurumsal</h4>
                    <ul className={styles.links}>
                        <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link href="/teknoloji">Teknoloji</Link></li>
                        <li><Link href="/cozumler">Çözümler</Link></li>
                        <li><Link href="/iletisim">İletişim</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Müşteri Hizmetleri</h4>
                    <ul className={styles.links}>
                        <li><Link href="/hesabim">Hesabım</Link></li>
                        <li><Link href="/iade-kosullari">İade ve Değişim</Link></li>
                        <li><Link href="/gizlilik-ve-guvenlik">Gizlilik ve Güvenlik</Link></li>
                        <li><Link href="/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>İletişim</h4>
                    <div className={styles.contactItem}>
                        <Mail size={18} />
                        <span>info@arnee.com</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={18} />
                        <span>+90 850 123 45 67</span>
                    </div>
                    <div className={styles.contactItem}>
                        <MapPin size={18} />
                        <span>İstanbul, Türkiye</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} Arnee Akustik. Tüm hakları saklıdır.</p>
                    <div className={styles.trustBadges}>
                        <span className={styles.trustItem}>🔒 256-Bit SSL</span>
                        <span className={styles.trustItem}>💳 Güvenli Ödeme</span>
                        <div className={styles.paymentIcons}>
                            {/* Simple text representation or divs for now due to lack of distinct payment icons in basic set */}
                            <span className={styles.cardIcon}>VISA</span>
                            <span className={styles.cardIcon}>MasterCard</span>
                            <span className={styles.cardIcon}>Troy</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
