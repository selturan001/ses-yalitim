'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Microscope, Palette, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './Hakkimizda.module.css';

export default function Hakkimizda() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/images/hero-bg-2.png"
                        alt="Arnee Akustik Studio"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Sessizliğin Mimarıyız</h1>
                    <p className={styles.subtitle}>
                        Sesin sanatla buluştuğu nokta.
                    </p>
                </div>
            </header>

            {/* Our Story */}
            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>Hikayemiz</h2>
                            <p className={styles.text}>
                                Arnee Akustik, gürültülü dünyanın kaosuna estetik bir sessizlik getirmek amacıyla kuruldu.
                                Geleneksel yalıtım malzemelerinin sıkıcı ve endüstriyel görünümüne bir başkaldırı olarak doğduk.
                            </p>
                            <p className={styles.text}>
                                <strong>Bizim için akustik panel, duvardaki bir sünger değil; mekanın ruhunu değiştiren bir tasarım objesidir.</strong>
                            </p>
                            <p className={styles.text}>
                                Air Mesh teknolojimiz, laboratuvar ortamında geliştirilen açık hücreli yapısıyla sesi sadece yutmaz;
                                onu kontrol altına alır ve mekana berraklık kazandırır.
                            </p>
                        </div>
                        <div className={styles.storyVisual}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/acoustic_technic_macro.png"
                                    alt="Arnee Technology Macro"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={styles.roundedImage}
                                />
                            </div>
                            <div className={styles.storyBadge}>
                                <span>10+ Yıl</span>
                                <small>Ar-Ge Deneyimi</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.valuesHeader}>
                        <h2 className={styles.sectionTitle}>Felsefemiz</h2>
                        <p className={styles.sectionDesc}>Bilim ve sanatın kusursuz uyumu.</p>
                    </div>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.iconBox}><Microscope size={32} /></div>
                            <h3>Bilimsel Yaklaşım</h3>
                            <p>NRC 0.95 değerine sahip panellerimiz, mühendislik harikası gözenek yapısıyla yankıyı yok eder.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconBox}><Palette size={32} /></div>
                            <h3>Estetik Tasarım</h3>
                            <p>Sadece kulaklarınıza değil, gözlerinize de hitap eden modern ve minimalist formlar.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconBox}><Leaf size={32} /></div>
                            <h3>Doğa & İnsan Dostu</h3>
                            <p>Sağlığa zararlı kimyasallar içermeyen, kokusuz ve güvenli materyaller kullanıyoruz.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.iconBox}><ShieldCheck size={32} /></div>
                            <h3>Ömür Boyu Garanti</h3>
                            <p>Ürünlerimize o kadar güveniyoruz ki, deformasyona karşı garanti sunuyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Creators */}
            <section className={styles.creatorsSection}>
                <div className={styles.container}>
                    <div className={styles.creatorsGrid}>
                        <div className={styles.creatorsVisuals}>
                            {/* Collage of creators using existing assets */}
                            <div className={styles.creatorImgBox}>
                                <Image src="/images/room-studio.png" alt="Studio" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.creatorImgBox}>
                                <Image src="/images/room-gamer.png" alt="Gamer" fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className={styles.creatorsContent}>
                            <h2 className={styles.sectionTitle}>Yaratıcılar İçin Üretildi</h2>
                            <p className={styles.text}>
                                İster profesyonel bir müzik yapımcısı olun, ister yayıncı, ister evden çalışan bir profesyonel.
                                Arnee, odaklanmanızı engelleyen gürültüyü alır, geriye sadece <strong>yaratıcılığınız</strong> kalır.
                            </p>
                            <ul className={styles.creatorList}>
                                <li>🎵 Müzik Stüdyoları</li>
                                <li>🎮 Oyuncu Odaları</li>
                                <li>🎥 Youtube / Podcast Stüdyoları</li>
                                <li>💼 Home Office Alanları</li>
                            </ul>
                            <Link href="/konfigurator" className={styles.ctaButton}>
                                Kendi Stüdyonu Tasarla <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
