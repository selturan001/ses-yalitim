'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AirMesh.module.css';

const PRODUCT_VARIANTS = [
    { id: 'black', name: 'Antrasit Siyah', color: '#1a1a1a', image: '/images/product-black.png' },
    { id: 'beige', name: 'Doğal Bej', color: '#e5e5d0', image: '/images/product-beige.png' },
    { id: 'blue', name: 'Gece Mavisi', color: '#1e3a8a', image: '/images/product-blue.png' },
    { id: 'red', name: 'Bordo', color: '#7f1d1d', image: '/images/product-red.png' }
];

const GALLERY_IMAGES = [
    '/images/product-macro.png',
    '/images/feature-gaming.png',
    '/images/feature-studio.png'
];

import { useCart } from '@/context/CartContext';

export default function AirMesh() {
    const [selectedVariant, setSelectedVariant] = useState(PRODUCT_VARIANTS[0]);
    const [mainImage, setMainImage] = useState(PRODUCT_VARIANTS[0].image);
    const { addToCart, toggleCart } = useCart();

    const handleColorSelect = (variant: typeof PRODUCT_VARIANTS[0]) => {
        setSelectedVariant(variant);
        setMainImage(variant.image);
    };

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        addToCart({
            id: `air-mesh-${selectedVariant.id}`,
            name: `Air Mesh - ${selectedVariant.name}`,
            price: 199.00,
            image: selectedVariant.image,
            colorHex: selectedVariant.color,
            quantity: quantity
        });
        toggleCart(); // Open cart to confirm addition
    };

    return (
        <main className={styles.main}>
            <section className={styles.productHero}>
                <div className={styles.visualColumn}>
                    {/* Visual Column Content (Unchanged) */}
                    <div className={styles.mainVisual}>
                        <Image
                            src={mainImage}
                            alt={`Air Mesh - ${selectedVariant.name}`}
                            fill
                            className={styles.productImage}
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.thumbnailGrid}>
                        <div
                            className={`${styles.thumbnail} ${mainImage === selectedVariant.image ? styles.activeThumb : ''}`}
                            onClick={() => setMainImage(selectedVariant.image)}
                        >
                            <Image src={selectedVariant.image} alt="Color Variant" fill style={{ objectFit: 'cover' }} />
                        </div>
                        {GALLERY_IMAGES.map((img, idx) => (
                            <div
                                key={idx}
                                className={`${styles.thumbnail} ${mainImage === img ? styles.activeThumb : ''}`}
                                onClick={() => setMainImage(img)}
                            >
                                <Image src={img} alt={`Gallery ${idx}`} fill style={{ objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.heroContent}>
                    <h1 className={styles.productName}>AIR MESH</h1>
                    <p className={styles.tagline}>Mükemmeliyetin Akustik Hali</p>

                    <div className={styles.priceContainer}>
                        <span className={styles.price}>199.00 ₺</span>
                        <span className={styles.unit}>/ adet</span>
                    </div>

                    <div className={styles.colorSelection}>
                        <span className={styles.selectionLabel}>Renk: <strong>{selectedVariant.name}</strong></span>
                        <div className={styles.swatches}>
                            {PRODUCT_VARIANTS.map((variant) => (
                                <button
                                    key={variant.id}
                                    className={`${styles.swatch} ${selectedVariant.id === variant.id ? styles.selectedSwatch : ''}`}
                                    style={{ backgroundColor: variant.color }}
                                    onClick={() => handleColorSelect(variant)}
                                    aria-label={`Select ${variant.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.actionsRow}>
                        <div className={styles.quantitySelector}>
                            <button className={styles.qtyBtn} onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className={styles.qtyDisplay}>{quantity}</span>
                            <button className={styles.qtyBtn} onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button
                            className={styles.buyButton}
                            onClick={handleAddToCart}
                        >
                            Sepete Ekle
                        </button>
                    </div>

                    <div className={styles.description}>
                        <p>
                            Modern yaşam alanları için tasarlanmış, üstün ses yutumu sağlayan Air Mesh teknolojisi.
                            Kolay uygulanır, uzun ömürlüdür ve her mekana uyum sağlar.
                        </p>
                        <ul className={styles.featureList}>
                            <li>✓ <strong>A Sınıfı Akustik Performans:</strong> NRC 0.95 ile sınıfının en iyisi.</li>
                            <li>✓ <strong>Kendinden Yapışkanlı:</strong> Ekstra yapıştırıcı gerektirmez.</li>
                            <li>✓ <strong>Yüksek Yangın Dayanımı:</strong> Güvenli yaşam alanları için opsiyonel alev almazlık.</li>
                            <li>✓ <strong>Anti-Bakteriyel & Hipoalerjenik:</strong> Sağlıklı iç mekan hava kalitesi.</li>
                            <li>✓ <strong>Isı Yalıtımı Katkısı:</strong> Mekan sıcaklığını dengede tutar.</li>
                            <li>✓ <strong>Kolay Temizlenebilir:</strong> Leke tutmaz, silinebilir yüzey.</li>
                            <li>✓ <strong>%100 Geri Dönüştürülebilir:</strong> Çevre dostu sürdürülebilir materyal.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.detailsSection}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>Teknik Özellikler</h2>
                    <div className={styles.specsGrid}>
                        <div className={styles.specCard}>
                            <h3>Özellik</h3>
                            <p>Kendinden Yapışkanlı</p>
                        </div>
                        <div className={styles.specCard}>
                            <h3>NRC</h3>
                            <p>0.95 (Sınıf A)</p>
                        </div>
                        <div className={styles.specCard}>
                            <h3>Kalınlık</h3>
                            <p>20mm</p>
                        </div>
                        <div className={styles.specCard}>
                            <h3>Boyutlar</h3>
                            <p>50cm x 50cm</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>Neden Air Mesh?</h2>

                    <div className={styles.compareGrid}>
                        {/* Traditional Option (Gray) */}
                        <div className={styles.compareCard}>
                            <div className={styles.cardHeader}>
                                <h3>Geleneksel Sünger</h3>
                                <span className={styles.statusBad}>Standart</span>
                            </div>
                            <ul className={styles.compareList}>
                                <li>
                                    <span className={styles.label}>Estetik</span>
                                    <span className={styles.value}>Sıradan, Endüstriyel</span>
                                </li>
                                <li>
                                    <span className={styles.label}>Dayanıklılık</span>
                                    <span className={styles.value}>2-3 Yıl (Parçalanabilir)</span>
                                </li>
                                <li>
                                    <span className={styles.label}>Montaj</span>
                                    <span className={styles.value}>Sprey Yapıştırıcı Gerekir</span>
                                </li>
                                <li>
                                    <span className={styles.label}>Temizlik</span>
                                    <span className={styles.value}>Toz Tutar, Silinmez</span>
                                </li>
                            </ul>
                        </div>

                        {/* VS Badge */}
                        <div className={styles.vsBadge}>VS</div>

                        {/* Air Mesh (Premium) */}
                        <div className={`${styles.compareCard} ${styles.premiumCard}`}>
                            <div className={styles.cardHeader}>
                                <h3>ARNEE Air Mesh</h3>
                                <span className={styles.statusGood}>Premium Seçim</span>
                            </div>
                            <ul className={styles.compareList}>
                                <li>
                                    <span className={styles.label}>Estetik</span>
                                    <span className={styles.valueHighlight}>Modern Mimari Doku</span>
                                </li>
                                <li>
                                    <span className={styles.label}>Dayanıklılık</span>
                                    <span className={styles.valueHighlight}>10+ Yıl (Dökülmez)</span>
                                </li>
                                <li>
                                    <span className={styles.label}>Montaj</span>
                                    <span className={styles.valueHighlight}>Kendinden Yapışkanlı</span>
                                </li>
                                <li>
                                    <span className={styles.label}>Temizlik</span>
                                    <span className={styles.valueHighlight}>Nemli Bezle Silinebilir</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>Uygulama Örnekleri</h2>
                    <div className={styles.galleryGrid}>
                        <div className={styles.galleryItem}>
                            <Image src="/images/feature-studio.png" alt="Stüdyo Uygulaması" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.galleryLabel}>Profesyonel Stüdyo</div>
                        </div>
                        <div className={styles.galleryItem}>
                            <Image src="/images/feature-gaming.png" alt="Oyun Odası" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.galleryLabel}>Gaming Room</div>
                        </div>
                        <div className={styles.galleryItem}>
                            <Image src="/images/feature-office.png" alt="Ofis" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.galleryLabel}>Home Office</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
