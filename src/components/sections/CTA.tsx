'use client';

import Link from 'next/link';
import { Headphones, Truck, ShieldCheck } from 'lucide-react';
import styles from './CTA.module.css';

const CTA = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ses Kalitenizi Yükseltin</h2>
                <p className={styles.description}>
                    Profesyonel stüdyo kalitesine ulaşmak için sadece bir adım uzaktasınız.
                </p>

                <div className={styles.valueGrid}>
                    <div className={styles.valueItem}>
                        <div className={styles.iconWrapper}>
                            <Headphones className={styles.icon} />
                        </div>
                        <h3 className={styles.valueTitle}>Uzman Desteği</h3>
                        <p className={styles.valueText}>
                            Akustik mimarlarımız projeniz için her zaman yanınızda.
                        </p>
                    </div>

                    <div className={styles.valueItem}>
                        <div className={styles.iconWrapper}>
                            <Truck className={styles.icon} />
                        </div>
                        <h3 className={styles.valueTitle}>Hızlı Kargo</h3>
                        <p className={styles.valueText}>
                            Saat 14:00'e kadar verilen siparişler aynı gün yola çıkar.
                        </p>
                    </div>

                    <div className={styles.valueItem}>
                        <div className={styles.iconWrapper}>
                            <ShieldCheck className={styles.icon} />
                        </div>
                        <h3 className={styles.valueTitle}>2 Yıl Garanti</h3>
                        <p className={styles.valueText}>
                            Üretim hatalarına karşı birebir değişim güvencesi.
                        </p>
                    </div>
                </div>

                <Link href="/urunler/air-mesh" className={styles.button}>
                    Hemen Sipariş Ver
                </Link>
            </div>
        </section>
    );
};

export default CTA;
