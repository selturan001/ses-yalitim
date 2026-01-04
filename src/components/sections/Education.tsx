'use client';

import { Check, X, Waves, ShieldAlert } from 'lucide-react';
import styles from './Education.module.css';

const Education = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Beklentilerinizi Yönetin</h2>
                    <p className={styles.subtitle}>
                        Doğru çözüm için doğru ürün: Ses Yutumu (Absorpsiyon) ile Ses Yalıtımı (İzolasyon) arasındaki farkı keşfedin.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Ses Yutumu Kartı */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconWrapper} ${styles.absorptionIcon}`}>
                                <Waves />
                            </div>
                            <h3 className={styles.cardTitle}>Ses Yutumu (Air Mesh)</h3>
                        </div>
                        <p className={styles.analogy}>
                            "Tıpkı bir süngerin suyu emmesi gibi, Air Mesh de odadaki ses dalgalarını emer."
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <Check size={18} className={styles.checkIcon} />
                                Yankı ve çınlamayı yok eder.
                            </li>
                            <li className={styles.listItem}>
                                <Check size={18} className={styles.checkIcon} />
                                Konuşma netliğini artırır.
                            </li>
                            <li className={styles.listItem}>
                                <Check size={18} className={styles.checkIcon} />
                                Stüdyo kalitesinde kayıt ortamı sağlar.
                            </li>
                            <li className={styles.listItem}>
                                <Check size={18} className={styles.checkIcon} />
                                Odanın akustik konforunu iyileştirir.
                            </li>
                        </ul>
                    </div>

                    {/* Ses Yalıtımı Kartı */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconWrapper} ${styles.insulationIcon}`}>
                                <ShieldAlert />
                            </div>
                            <h3 className={styles.cardTitle}>Ses Yalıtımı (İzolasyon)</h3>
                        </div>
                        <p className={styles.analogy}>
                            "Sesi bir duvar gibi bloklayarak diğer tarafa geçmesini engeller."
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <X size={18} className={styles.crossIcon} />
                                Komşudan gelen yüksek sesi tamamen kesmez.
                            </li>
                            <li className={styles.listItem}>
                                <X size={18} className={styles.crossIcon} />
                                Trafik gürültüsünü %100 engellemez.
                            </li>
                            <li className={styles.listItem}>
                                <Check size={18} className={styles.checkIcon} />
                                Ancak; yansıyan sesleri azalttığı için gürültü karmaşasını düşürür.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.honestyBox}>
                    <p>
                        <strong>Dürüst Yaklaşım:</strong> Air Mesh, komşunuzun gürültüsünü tamamen kesmek için değil (Ses Yalıtımı),
                        cozulmeyen yankı problemlerinizi bitirmek ve odanızdaki ses kalitesini profesyonelleştirmek için (Ses Yutumu) tasarlanmıştır.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
