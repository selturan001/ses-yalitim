'use client';

import { useState } from 'react';
import styles from './SoundVisualizer.module.css';

const SoundVisualizer = () => {
    const [isTreated, setIsTreated] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button
                    className={`${styles.button} ${!isTreated ? styles.active : ''}`}
                    onClick={() => setIsTreated(false)}
                >
                    Normal Oda (Yankılı)
                </button>
                <button
                    className={`${styles.button} ${isTreated ? styles.active : ''}`}
                    onClick={() => setIsTreated(true)}
                >
                    Air Mesh ile (Sessiz)
                </button>
            </div>

            <div className={`${styles.visualizer} ${isTreated ? styles.clean : ''}`}>
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.bar}
                        style={{
                            height: isTreated ? '20%' : undefined,
                            animationDuration: isTreated ? `${1 + i * 0.1}s` : `${0.4 + Math.random() * 0.5}s`,
                            animationDelay: `${i * 0.05}s`
                        }}
                    />
                ))}
            </div>

            <div className={styles.label}>
                {isTreated
                    ? "Düzenli ve kontrollü ses dalgaları. Yankı sönümlendi."
                    : "Kaotik ses yansımaları. Uğultu ve gürültü karmaşası."}
            </div>
        </div>
    );
};

export default SoundVisualizer;
