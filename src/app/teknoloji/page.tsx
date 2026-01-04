
'use client';

import Image from 'next/image';
import { AreaChart, Shield, Flame, FileCheck, Layers, Wind, Brain, Waves, XCircle, CheckCircle, Zap } from 'lucide-react';
import styles from './Teknoloji.module.css';

export default function Teknoloji() {
    return (
        <main className={styles.main}>
            {/* Hero Section - Redesigned to match About Us */}
            <header className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/images/hero-bg.png"
                        alt="Acoustic Science"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Sessizliğin Arkasındaki Bilim</h1>
                    <p className={styles.subtitle}>
                        Akustik, sadece sesi duymamak değil; <br /> doğru duymak sanatıdır.
                    </p>
                </div>
            </header>

            {/* Psychoacoustics: Why it matters? */}
            <section className={styles.psychoSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadingCentered}>Neden Akustik?</h2>
                    <p className={styles.sectionDesc}>Sesin insan psikolojisi ve performansı üzerindeki kanıtlanmış etkileri.</p>
                    <div className={styles.psychoGrid}>
                        <div className={styles.psychoCard}>
                            <Brain size={40} className={styles.psychoIcon} />
                            <h3>Bilişsel Yük</h3>
                            <p>Kötü akustik, beynin sesi işlemek için daha fazla enerji harcamasına neden olur, bu da odak süresini %40'a varan oranda düşürür.</p>
                        </div>
                        <div className={styles.psychoCard}>
                            <Waves size={40} className={styles.psychoIcon} />
                            <h3>Stres Limiti</h3>
                            <p>Devamlı gürültü ve yankı, vücutta kortizol (stres hormonu) salgısını artırarak anksiyete ve yorgunluğa yol açar.</p>
                        </div>
                        <div className={styles.psychoCard}>
                            <Zap size={40} className={styles.psychoIcon} />
                            <h3>Üretkenlik</h3>
                            <p>Optimize edilmiş akustik ortamlar, karmaşık görevlerde hata oranını azaltır ve yaratıcılık akışını korur.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive: Air Mesh Structure (Existing but refined) */}
            <section className={styles.scienceSection}>
                <div className={styles.container}>
                    <div className={styles.scienceGrid}>
                        <div className={styles.scienceText}>
                            <h2 className={styles.sectionHeading}>Mikroskobik Kusursuzluk</h2>
                            <p className={styles.text}>
                                Air Mesh paneller, açık hücreli gözenek yapısına sahip özel polimerlerden üretilir.
                                Bu yapı, ses dalgaları yüzeye çarptığında onları, labirent benzeri tünellerin içine hapseder.
                            </p>
                            <p className={styles.text}>
                                <strong>Sürtünme Prensibi:</strong> Ses enerjisi, bu mikro tünellerde ilerlerken sürtünme yoluyla ısı enerjisine dönüşür.
                                Sonuç? Odaya geri dönen yankı değil, sessizliktir.
                            </p>
                            <ul className={styles.featureList}>
                                <li><Wind size={20} /> %95 Açık Hücre Yapısı</li>
                                <li><Layers size={20} /> 3D Optimize Edilmiş Yoğunluk</li>
                                <li><Shield size={20} /> Neme ve Küfe Dayanıklı</li>
                            </ul>
                        </div>
                        <div className={styles.scienceVisual}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/acoustic_technic_macro.png"
                                    alt="Mikroskobik Yapı"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.badge}>
                                    <span>55</span>
                                    <small>DNS Yoğunluk</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acoustic Problems Explained */}
            <section className={styles.physicsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadingCentered}>Bozuk Sesin Anatomisi</h2>
                    <p className={styles.sectionDesc}>Odanızda duyduğunuz rahatsız edici seslerin fiziksel açıklaması.</p>

                    <div className={styles.physicsGrid}>
                        <div className={styles.physicsItem}>
                            <h3>1. Flutter Echo (Çınlama)</h3>
                            <p>Sert ve paralel yüzeyler arasında sesin pinpon topu gibi gidip gelmesidir. Metalik bir tınlama olarak duyulur.</p>
                            <div className={styles.solutionTag}>Çözüm: Karşılıklı yüzeylerde Air Mesh kullanımı.</div>
                        </div>
                        <div className={styles.physicsItem}>
                            <h3>2. Standing Waves (Duran Dalgalar)</h3>
                            <p>Oda boyutlarının (en-boy-yükseklik) ses dalga boylarıyla çakışması sonucu oluşan bas birikmeleri veya ses sönümlenmeleridir.</p>
                            <div className={styles.solutionTag}>Çözüm: Köşe Bass Trap uygulamaları.</div>
                        </div>
                        <div className={styles.physicsItem}>
                            <h3>3. RT60 (Reverberation Time)</h3>
                            <p>Bir sesin kaynağı sustuktan sonra 60dB azalması için geçen süredir. Yüksek RT60, konuşmaların anlaşılmaz olmasına neden olur.</p>
                            <div className={styles.solutionTag}>Çözüm: Toplam yüzey alanına göre hesaplanmış panel metrajı.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Myths vs Facts Comparison */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadingCentered}>Efsaneler ve Gerçekler</h2>
                    <div className={styles.mythGrid}>
                        <div className={styles.mythCard}>
                            <div className={styles.mythHeader}>
                                <XCircle className={styles.iconBad} size={32} />
                                <h3>Yumurta Kartonu</h3>
                            </div>
                            <p><strong>Efsane:</strong> "Yumurta kartonları mükemmel ses yalıtımı sağlar."</p>
                            <p className={styles.mythReality}><strong>Gerçek:</strong> Sadece şekli benzerdir. Kütlesi ve yoğunluğu olmadığı için sesi durduramaz veya akustik olarak düzenleyemez. Yanıcıdır ve böcek barındırır.</p>
                        </div>
                        <div className={styles.mythCard}>
                            <div className={styles.mythHeader}>
                                <XCircle className={styles.iconBad} size={32} />
                                <h3>Strafor Köpük</h3>
                            </div>
                            <p><strong>Efsane:</strong> "Strafor paneller sesi yalar."</p>
                            <p className={styles.mythReality}><strong>Gerçek:</strong> Kapalı hücre yapısına sahiptir. Sesi içine hapsetmek yerine ayna gibi geri yansıtır. Isı yalıtımı içindir, ses için değil.</p>
                        </div>
                        <div className={styles.mythCard + ' ' + styles.winnerCard}>
                            <div className={styles.mythHeader}>
                                <CheckCircle className={styles.iconGood} size={32} />
                                <h3>Air Mesh Panel</h3>
                            </div>
                            <p><strong>Bilim:</strong> "Açık Hücreli + Yüksek Yoğunluklu"</p>
                            <p className={styles.mythReality}><strong>Gerçek:</strong> Ses dalgalarını içine alacak gözeneklere ve o enerjiyi söndürecek kütleye (50DNS) sahiptir. Profesyonel standarttır.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational: Isolation vs Absorption */}
            <section className={styles.educationSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadingCentered}>Yalıtım mı, Akustik Düzenleme mi?</h2>
                    <p className={styles.sectionDesc}>Müşterilerimizin en çok karıştırdığı iki kavramı netleştirelim.</p>

                    <div className={styles.comparisonGrid}>
                        <div className={styles.comparisonCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconCircle}><Shield size={32} /></div>
                                <h3>Ses Yalıtımı (Isolation)</h3>
                            </div>
                            <p>Sesin bir odadan diğerine geçmesini engellemektir (Örn: Komşudan gelen ses).</p>
                            <div className={styles.usageItem}>
                                <strong>Amaç:</strong> Blokaj
                            </div>
                            <div className={styles.usageItem}>
                                <strong>Malzemeler:</strong> Ağır bariyerler, taş yünü.
                            </div>
                        </div>

                        <div className={styles.comparisonCard + ' ' + styles.highlightCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconCircle}><AreaChart size={32} /></div>
                                <h3>Akustik Düzenleme (Absorption)</h3>
                            </div>
                            <p>Oda <strong>içindeki</strong> sesin kalitesini artırmak, çınlamayı ve yankıyı önlemektir.</p>
                            <div className={styles.usageItem}>
                                <strong>Amaç:</strong> Kontrol & Kalite
                            </div>
                            <div className={styles.usageItem}>
                                <strong>Malzemeler:</strong> Air Mesh Paneller, Bass Traps.
                            </div>
                            <div className={styles.note}>
                                *Arnee ürünleri bu kategoridedir.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Graph (Existing) */}
            <section className={styles.performanceSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadingCentered}>Kanıtlanmış Performans (NRC)</h2>
                    <div className={styles.chartContainer}>
                        {/* ... Chart Content Same ... */}
                        <div className={styles.yAxis}>
                            <span>1.0</span>
                            <span>0.5</span>
                            <span>0.0</span>
                        </div>
                        <div className={styles.chart}>
                            {[
                                { label: '125Hz', val: 0.40 },
                                { label: '250Hz', val: 0.60 },
                                { label: '500Hz', val: 0.85 },
                                { label: '1kHz', val: 0.95 },
                                { label: '2kHz', val: 0.98 },
                                { label: '4kHz', val: 0.95 },
                            ].map((bar, i) => (
                                <div key={i} className={styles.barGroup}>
                                    <div className={styles.bar} style={{ height: (bar.val * 100) + '%' }}>
                                        <span className={styles.tooltip}>{bar.val}</span>
                                    </div>
                                    <span className={styles.label}>{bar.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className={styles.chartCaption}>Test Standartları: ASTM C423 / ISO 354 • Sınıf A Absorber</p>
                </div>
            </section>

            {/* Technical Specs Table */}
            <section className={styles.specsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Teknik Spesifikasyonlar</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.specsTable}>
                            <tbody>
                                <tr>
                                    <td>Ürün Tipi</td>
                                    <td>Açık Hücreli Poliüretan Akustik Panel</td>
                                </tr>
                                <tr>
                                    <td>Yoğunluk (Density)</td>
                                    <td>50-55 kg/m³ (±2)</td>
                                </tr>
                                <tr>
                                    <td>NRC (Noise Reduction Coefficient)</td>
                                    <td>0.95 (Sınıf A)</td>
                                </tr>
                                <tr>
                                    <td>Çekme Dayanımı</td>
                                    <td>Min. 150 kPa (ISO 1798)</td>
                                </tr>
                                <tr>
                                    <td>Uzama</td>
                                    <td>Min. %120 (ISO 1798)</td>
                                </tr>
                                <tr>
                                    <td>Yanmazlık Sınıfı</td>
                                    <td>FR (Alev Yürütmez) - İsteğe Bağlı MVSS 302</td>
                                </tr>
                                <tr>
                                    <td>Sıcaklık Dayanımı</td>
                                    <td>-40°C ile +110°C arası</td>
                                </tr>
                                <tr>
                                    <td>Uygulama Şekli</td>
                                    <td>Hızlı Yapıştırıcı / Çift Taraflı Bant</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className={styles.certSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeadingCentered}>Sertifikalar & Standartlar</h2>
                    <div className={styles.certGrid}>
                        <div className={styles.certItem}>
                            <FileCheck size={48} className={styles.certIcon} />
                            <span>ISO 9001:2015</span>
                            <small>Kalite Yönetimi</small>
                        </div>
                        <div className={styles.certItem}>
                            <Flame size={48} className={styles.certIcon} />
                            <span>BS 476 Part 7</span>
                            <small>Yangın Güvenliği</small>
                        </div>
                        <div className={styles.certItem}>
                            <Shield size={48} className={styles.certIcon} />
                            <span>REACH Uyumlu</span>
                            <small>İnsan Sağlığına Zararsız</small>
                        </div>
                        <div className={styles.certItem}>
                            <Layers size={48} className={styles.certIcon} />
                            <span>RoHS Belgeli</span>
                            <small>Çevre Dostu</small>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
