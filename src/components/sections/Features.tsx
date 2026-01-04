'use client';

import Image from 'next/image';
import styles from './Features.module.css';

const features = [
    {
        image: '/images/feature-studio.png',
        title: "Ev Stüdyosu",
        description: "Profesyonel kayıtlarınız için sıfır yankı, maksimum netlik."
    },
    {
        image: '/images/feature-gaming.png',
        title: "Oyun & Stream",
        description: "Yayınlarınızda sesiniz pürüzsüz, oyun atmosferiniz izole olsun."
    },
    {
        image: '/images/feature-office.png',
        title: "Home Office",
        description: "Zoom toplantılarında dağılan dikkati toplayın, odaklanın."
    },
    {
        image: '/images/hero-bg-2.png', // Reusing hero for Living Room as it fits perfectly
        title: "Yaşam Alanı",
        description: "Evinizin akustiğini iyileştirin, sinema keyfini katlayın."
    }
];

const Features = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Yaşam Alanınızı Dönüştürün</h2>
                    <p className={styles.subtitle}>
                        Sadece bir sünger değil, mekanınızın atmosferini değiştiren bir dokunuş.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
