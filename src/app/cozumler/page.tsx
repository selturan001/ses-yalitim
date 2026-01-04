import Link from 'next/link';
import Image from 'next/image';
import {
    Building2,
    GraduationCap,
    Stethoscope,
    UtensilsCrossed,
    Check,
    Shield,
    Clock,
    Headphones,
    Phone,
    FileText,
    Mic2,
    BedDouble
} from 'lucide-react';
import styles from './Cozumler.module.css';

const sectors = [
    {
        id: 'office',
        icon: Building2,
        title: 'Açık Ofisler',
        description: 'Açık plan ofislerde ses konforu sağlayın. Toplantı odaları, çalışma alanları ve ortak alanlarda profesyonel akustik çözümler.',
        features: ['Konuşma gizliliği', 'Dikkat dağınıklığını azaltma', 'Verimlilik artışı']
    },
    {
        id: 'education',
        icon: GraduationCap,
        title: 'Eğitim Kurumları',
        description: 'Sınıflar, konferans salonları ve kütüphaneler için optimize edilmiş akustik. Öğrenme deneyimini iyileştirin.',
        features: ['Konuşma anlaşılırlığı', 'Düşük frekanslı gürültü kontrolü', 'Öğrenci odaklı tasarım']
    },
    {
        id: 'healthcare',
        icon: Stethoscope,
        title: 'Sağlık Tesisleri',
        description: 'Hastane odaları, muayenehaneler ve bekleme salonları için hijyenik ve sessiz ortamlar.',
        features: ['Hasta mahremiyeti', 'Hijyenik yüzeyler', 'Stres azaltma']
    },
    {
        id: 'hospitality',
        icon: UtensilsCrossed,
        title: 'Yeme-İçme Mekanları',
        description: 'Restoranlar, kafeler ve barlar için atmosfer kontrolü. Müşteri deneyimini geliştirin.',
        features: ['Atmosfer yönetimi', 'Konuşma rahatlığı', 'Estetik uyum']
    },
    {
        id: 'studio',
        icon: Mic2,
        title: 'Ev Stüdyosu & Gaming',
        description: 'Podcast, yayıncılık ve müzik prodüksiyonu için stüdyo kalitesinde ses. Yankısız ve net kayıtlar alın.',
        features: ['Net ses kaydı', 'Flutter eko kontrolü', 'Bass trap çözümleri']
    },
    {
        id: 'hotel',
        icon: BedDouble, // or Clapperboard for Cinema? Let's use Hotel/Accommodation as it fits the commercial theme nicely
        title: 'Otel & Konaklama',
        description: 'Oteller, lobiler ve odalar için ses yalıtımı. Misafirlerinize sessiz ve huzurlu bir konaklama sunun.',
        features: ['Oda içi mahremiyet', 'Koridor sesi yalıtımı', 'Huzurlu uyku ortamı']
    }
];

const benefits = [
    { number: '40%', label: 'Verimlilik Artışı', desc: 'Sessiz çalışma ortamlarında' },
    { number: '95%', label: 'Ses Emilimi', desc: 'NRC Sınıf A performans' },
    { number: '10+', label: 'Yıl Garanti', desc: 'Premium malzeme kalitesi' },
    { number: '48h', label: 'Hızlı Kurulum', desc: 'Profesyonel montaj ekibi' }
];

const processSteps = [
    { title: 'Akustik Analiz', desc: 'Mekanınızın mevcut akustik durumunu ölçüyor ve ihtiyaçları belirliyoruz.' },
    { title: 'Özel Tasarım', desc: 'Markanıza ve mekanınıza uygun özel çözümler tasarlıyoruz.' },
    { title: 'Profesyonel Montaj', desc: 'Deneyimli ekibimiz hızlı ve temiz bir kurulum gerçekleştiriyor.' },
    { title: 'Performans Testi', desc: 'Kurulum sonrası akustik ölçümlerle sonuçları doğruluyoruz.' }
];

export default function Cozumler() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/images/hero-bg-2.png"
                        alt="Kurumsal Çözümler"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Kurumsal Akustik Çözümler
                    </h1>
                    <p className={styles.subtitle}>
                        İşletmenizin ihtiyaçlarına özel, profesyonel ses yalıtım projeleri. <br />
                        Analiz, tasarım ve uygulamada uçtan uca mükemmellik.
                    </p>
                    <div className={styles.heroBadges}>
                        <div className={styles.badge}>
                            <Shield size={18} />
                            <span>Kurumsal Garanti</span>
                        </div>
                        <div className={styles.badge}>
                            <Clock size={18} />
                            <span>Hızlı Teslimat</span>
                        </div>
                        <div className={styles.badge}>
                            <Headphones size={18} />
                            <span>7/24 Destek</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sectors Section */}
            <section className={styles.sectorsSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Sektörel Çözümler</h2>
                        <p className={styles.sectionSubtitle}>
                            Her sektörün kendine özgü akustik ihtiyaçları vardır. <br />
                            Uzman ekibimiz, sektörünüze özel çözümler sunar.
                        </p>
                    </div>

                    <div className={styles.sectorsGrid}>
                        {sectors.map((sector) => (
                            <div key={sector.id} className={styles.sectorCard}>
                                <div className={styles.sectorIcon}>
                                    <sector.icon size={28} />
                                </div>
                                <h3 className={styles.sectorTitle}>{sector.title}</h3>
                                <p className={styles.sectorDescription}>{sector.description}</p>
                                <div className={styles.sectorFeatures}>
                                    {sector.features.map((feature, idx) => (
                                        <div key={idx} className={styles.sectorFeature}>
                                            <Check size={14} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Neden Arnee?</h2>
                        <p className={styles.sectionSubtitle}>
                            Rakamlarla farkımız
                        </p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className={styles.benefitItem}>
                                <div className={styles.benefitNumber}>{benefit.number}</div>
                                <div className={styles.benefitLabel}>{benefit.label}</div>
                                <div className={styles.benefitDesc}>{benefit.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className={styles.processSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Çalışma Sürecimiz</h2>
                        <p className={styles.sectionSubtitle}>
                            Projenizin her aşamasında yanınızdayız
                        </p>
                    </div>

                    <div className={styles.processSteps}>
                        {processSteps.map((step, idx) => (
                            <div key={idx} className={styles.processStep}>
                                <div className={styles.stepNumber}>{idx + 1}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.sectionContainer}>
                    <h2 className={styles.ctaTitle}>Projenizi Konuşalım</h2>
                    <p className={styles.ctaSubtitle}>
                        Ücretsiz akustik danışmanlık için bizimle iletişime geçin.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/iletisim" className={styles.ctaPrimary}>
                            <Phone size={18} />
                            Bize Ulaşın
                        </Link>
                        <Link href="/konfigurator" className={styles.ctaSecondary}>
                            <FileText size={18} />
                            Online Teklif Alın
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
