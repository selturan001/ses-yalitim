'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import styles from './RoomSelector.module.css';

const rooms = [
    {
        id: 'studio',
        label: 'Ev Stüdyosu',
        image: '/images/room-studio.png',
        title: 'Profesyonel Kayıt Ortamı',
        description: 'Vokalleriniz artık banyo kaydı gibi tınlamayacak. Kuru, net ve mikslemeye hazır bir akustik ortam yaratın.',
        features: ['Flat Frekans Cevabı', 'Yüksek Emilim', 'Profesyonel Görünüm']
    },
    {
        id: 'gamer',
        label: 'Oyun & Stream',
        image: '/images/room-gamer.png',
        title: 'Level Up Your Sound',
        description: 'RGB ışıklarınız kadar ses kalitenize de önem verin. Yayın sırasında klavye seslerini ve oda yankısını yok edin.',
        features: ['Net Ses İletimi', 'Klavye Gürültüsü Önleme', 'Cyberpunk Estetik']
    },
    {
        id: 'office',
        label: 'Home Office',
        image: '/images/room-office.png',
        title: 'Odaklanma Alanı',
        description: 'Online toplantılarda yankısız, net bir ses deneyimi. Dikkat dağıtıcı uğultuları engelleyerek verimliliğinizi artırın.',
        features: ['Toplantı Gizliliği', 'Yankı Kontrolü', 'Minimalist Tasarım']
    },
    {
        id: 'living',
        label: 'Yaşam Alanı',
        image: '/images/hero-bg-2.png',
        title: 'Sinema Keyfi & Huzur',
        description: 'Evinizin salonunu gerçek bir sinema salonuna dönüştürün. Komşuları rahatsız etmeden filmin tadını çıkarın.',
        features: ['Sinema Akustiği', 'Gürültü İzolasyonu', 'Dekoratif Dokunuş']
    }
];

const RoomSelector = () => {
    const [activeRoom, setActiveRoom] = useState(rooms[0]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Hangi Alandasınız?</h2>
                    <p className={styles.subtitle}>İhtiyacınıza uygun çözümü seçin, farkı görün.</p>
                </div>

                <div className={styles.tabsContainer}>
                    <div className={styles.tabs}>
                        {rooms.map((room) => (
                            <button
                                key={room.id}
                                className={`${styles.tab} ${activeRoom.id === room.id ? styles.active : ''}`}
                                onClick={() => setActiveRoom(room)}
                            >
                                {room.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={activeRoom.image}
                                alt={activeRoom.title}
                                fill
                                quality={90}
                                style={{ objectFit: 'cover' }}
                                className={styles.roomImage}
                            />
                        </div>
                    </div>

                    <div className={styles.detailsColumn}>
                        <div className={styles.textContent}>
                            <h3 className={styles.roomTitle}>{activeRoom.title}</h3>
                            <p className={styles.roomDescription}>{activeRoom.description}</p>

                            <div className={styles.features}>
                                {activeRoom.features.map((feature, index) => (
                                    <div key={index} className={styles.feature}>
                                        <div className={styles.checkIcon}>
                                            <Check size={18} />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/urunler/air-mesh" className={styles.ctaWrapper}>
                                <button className={styles.ctaButton}>
                                    Hemen Sipariş Ver
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomSelector;
