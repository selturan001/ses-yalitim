import Image from 'next/image';
import { Quote } from 'lucide-react';
import styles from './CreatorHighlights.module.css';

const creators = [
    {
        id: 1,
        name: 'Eren Y.',
        role: 'Müzik Prodüktörü',
        description: 'Ev stüdyomdaki yankı problemini çözmek için çok araştırma yaptım. Air Mesh hem performansı hem de duruşuyla stüdyomun havasını değiştirdi.',
        image: '/images/creator-1.png'
    },
    {
        id: 2,
        name: 'Selin K.',
        role: 'Twitch Yayıncısı',
        description: 'Yayın sırasında sesimin daha net gitmesi gerekiyordu. İzleyicilerim farkı hemen anladı. Arka planda da harika duruyor.',
        image: '/images/creator-2.png'
    },
    {
        id: 3,
        name: 'Mert D.',
        role: 'Yazılım Geliştirici',
        description: 'Home office çalışırken toplantı verimim arttı. Artık odamda konuşurken sesim boğulmuyor, çok daha profesyonel hissediyorum.',
        image: '/images/creator-3.png'
    }
];

const CreatorHighlights = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Yaratıcıların Tercihi</h2>
                    <p className={styles.subtitle}>Sesinizi netleştiren, alanınızı güzelleştiren dokunuş.</p>
                </div>

                <div className={styles.grid}>
                    {creators.map((creator) => (
                        <div key={creator.id} className={styles.card}>
                            <div className={styles.quoteIcon}>
                                <Quote size={24} />
                            </div>
                            <p className={styles.text}>"{creator.description}"</p>

                            <div className={styles.profile}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={creator.image}
                                        alt={creator.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{creator.name}</h4>
                                    <span className={styles.role}>{creator.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className={styles.glow} />
        </section>
    );
};

export default CreatorHighlights;
