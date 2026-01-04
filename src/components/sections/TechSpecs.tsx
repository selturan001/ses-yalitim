import Image from 'next/image';
import styles from './TechSpecs.module.css';

const TechSpecs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>Mühendislik Harikası</h2>
                    <p className={styles.description}>
                        Sadece bir sünger değil, akustik bir teknoloji. Air Mesh, optimize edilmiş açık hücreli yapısı ile sesi hapseder ve ısı enerjisine dönüştürür.
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/acoustic_technic_macro.png"
                            alt="Air Mesh Technical Macro Analysis"
                            fill
                            quality={95}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.imageOverlay}>
                            <span className={styles.imageBadge}>Makro Yapı Analizi</span>
                        </div>
                    </div>

                    <div className={styles.specsWrapper}>
                        <div className={styles.specsGrid}>
                            <div className={styles.specGroup}>
                                <h3 className={styles.groupTitle}>Fiziksel Özellikler</h3>
                                <div className={styles.row}>
                                    <span className={styles.label}>Boyutlar</span>
                                    <span className={styles.value}>50cm x 50cm (± 2mm)</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Kalınlık</span>
                                    <span className={styles.value}>20mm (Standart Kalınlık)</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Paket İçeriği</span>
                                    <span className={styles.value}>10 Adet / 2.5 m²</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Renk</span>
                                    <span className={styles.value}>Antrasit Siyah / Opsiyonel Renkler</span>
                                </div>
                            </div>
                            {/* Acoustic and Material groups continue here... */}

                            <div className={styles.specGroup}>
                                <h3 className={styles.groupTitle}>Akustik Performans</h3>
                                <div className={styles.row}>
                                    <span className={styles.label}>NRC Değeri</span>
                                    <span className={styles.value}>0.95 (Yüksek Performans)</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Ses Yutumu</span>
                                    <span className={styles.value}>Sınıf A (ISO 11654)</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Frekans Aralığı</span>
                                    <span className={styles.value}>125Hz - 4000Hz Etkili</span>
                                </div>
                            </div>

                            <div className={styles.specGroup}>
                                <h3 className={styles.groupTitle}>Materyal & Güvenlik</h3>
                                <div className={styles.row}>
                                    <span className={styles.label}>Hammadde</span>
                                    <span className={styles.value}>Açık Gözenekli Poliüretan</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Yoğunluk</span>
                                    <span className={styles.value}>50-55 DNS (Yüksek Yoğunluk)</span>
                                </div>
                                <div className={styles.row}>
                                    <span className={styles.label}>Yanmazlık</span>
                                    <span className={styles.value}>FR (Alev Yürütmez) Opsiyonel</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.certifications}>
                            {/* Future placeholder for ISO/CE logos if needed */}
                            <p className={styles.note}>*ISO 9001 standartlarında üretilmiştir.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default TechSpecs;
