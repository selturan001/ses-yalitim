import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src="/images/hero-bg-2.png"
                    alt="Luxury Acoustic Living Room"
                    fill
                    quality={100}
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.highlight}>Sessizliğin</span> Estetiği
                </h1>
                <p className={styles.subtitle}>
                    Yaşam alanlarınız sadece birer oda değil, sizin sığınağınızdır.
                    Arnee ile profesyonel sessizliğin konforunu yaşayın.
                </p>
                <div className={styles.actions}>
                    <Link href="/urunler/air-mesh" className={styles.primaryBtn}>
                        Ürünleri Keşfet
                    </Link>
                    <Link href="/iletisim" className={styles.secondaryBtn}>
                        Bize Ulaşın
                    </Link>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
