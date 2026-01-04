'use client';

import { Layers, MousePointerClick, Sparkles } from 'lucide-react';
import styles from './InstallationGuide.module.css';

const steps = [
    {
        icon: <Layers size={48} strokeWidth={1.5} />,
        step: "01",
        title: "Bandı Çıkar",
        description: "Panelin arkasındaki yüksek güçlü yapışkan koruyucuyu tek hareketle sökün. Ekstra yapıştırıcıya ihtiyacınız yok."
    },
    {
        icon: <MousePointerClick size={48} strokeWidth={1.5} />,
        step: "02",
        title: "Yapıştır",
        description: "Temizlediğiniz duvar yüzeyine paneli hizalayın ve hafifçe bastırın. Anında tutunma sağlar."
    },
    {
        icon: <Sparkles size={48} strokeWidth={1.5} />,
        step: "03",
        title: "Keyfini Sür",
        description: "Odanızın değişen akustiğini ve profesyonel görünümünü deneyimleyin. Bu kadar kolay."
    }
];

const InstallationGuide = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>3 Adımda Kolay Uygulama</h2>
                    <p className={styles.subtitle}>
                        Usta yok, toz yok, gürültü yok. Kendi alanınızı dakikalar içinde dönüştürün.
                    </p>
                </div>

                <div className={styles.grid}>
                    {steps.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.stepNumber}>{item.step}</div>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>

                            {/* Connector Line for steps 1 and 2 */}
                            {index < steps.length - 1 && <div className={styles.connector} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstallationGuide;
