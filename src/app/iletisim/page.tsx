'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import styles from './Iletisim.module.css';

export default function Iletisim() {
    return (
        <main className={styles.main}>
            {/* Header / Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/images/hero-bg.png"
                        alt="Contact Us"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Bize Ulaşın</h1>
                    <p className={styles.subtitle}>
                        Projenizi hayata geçirmek için buradayız. <br /> Uzman ekibimizle iletişime geçin.
                    </p>
                </div>
            </header>

            {/* Main Contact Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* Left Column: Contact Form */}
                        <div className={styles.formColumn}>
                            <div className={styles.formCard}>
                                <h2 className={styles.cardTitle}>Mesaj Gönderin</h2>
                                <p className={styles.cardDesc}>
                                    Aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapalım.
                                </p>

                                <form className={styles.form}>
                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name" className={styles.label}>Adınız Soyadınız</label>
                                            <input type="text" id="name" className={styles.input} placeholder="Adınız" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email" className={styles.label}>E-posta</label>
                                            <input type="email" id="email" className={styles.input} placeholder="Email adresiniz" />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject" className={styles.label}>Konu</label>
                                        <select id="subject" className={styles.select}>
                                            <option value="">Seçim Yapınız</option>
                                            <option value="project">Özel Proje & Mimari</option>
                                            <option value="sales">Ürün Satışı</option>
                                            <option value="support">Teknik Destek</option>
                                            <option value="partnership">Bayilik / İş Ortaklığı</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>Mesajınız</label>
                                        <textarea id="message" rows={6} className={styles.textarea} placeholder="Proje detayları veya sorunuz..."></textarea>
                                    </div>

                                    <button type="button" className={styles.submitBtn}>
                                        <span>GÖNDER</span>
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column: Contact Info & Map */}
                        <div className={styles.infoColumn}>
                            {/* Contact Details Cards */}
                            <div className={styles.infoGrid}>
                                <div className={styles.infoCard}>
                                    <div className={styles.iconBox}><Phone size={24} /></div>
                                    <div>
                                        <h3>Telefon</h3>
                                        <p>+90 (212) 555 00 00</p>
                                        <small>Hafta içi: 09:00 - 18:00</small>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.iconBox}><Mail size={24} /></div>
                                    <div>
                                        <h3>E-Posta</h3>
                                        <p>info@arnee.com</p>
                                        <small>7/24 Destek</small>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.iconBox}><MapPin size={24} /></div>
                                    <div>
                                        <h3>Genel Merkez</h3>
                                        <p>Maslak Mah. Büyükdere Cad.</p>
                                        <small>Sarıyer, İstanbul</small>
                                    </div>
                                </div>
                            </div>

                            {/* Map Visual */}
                            <div className={styles.mapMap}>
                                <div className={styles.mapOverlay}>
                                    <Globe size={48} className={styles.mapIcon} />
                                    <span>Google Maps Entegrasyonu</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
