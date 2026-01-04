'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './Konfigurator.module.css';

const PANEL_SIZE = 50; // cm
const PANEL_PRICE = 199; // TL

const COLORS = [
    { id: 'anthracite', name: 'Antrasit', hex: '#2d2d2d' },
    { id: 'cream', name: 'Krem', hex: '#f5f0e6' },
    { id: 'gray', name: 'Gri', hex: '#6b7280' },
    { id: 'navy', name: 'Lacivert', hex: '#1e3a5f' },
];

export default function Konfigurator() {
    const [wallWidth, setWallWidth] = useState(3); // meters
    const [wallHeight, setWallHeight] = useState(2.4); // meters
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);
    const [filledCells, setFilledCells] = useState<Set<string>>(new Set());

    // Calculate grid dimensions based on wall size
    const cols = Math.ceil((wallWidth * 100) / PANEL_SIZE);
    const rows = Math.ceil((wallHeight * 100) / PANEL_SIZE);
    const totalCells = cols * rows;

    // Calculate cell size for responsive display
    const cellSize = useMemo(() => {
        const maxCanvasWidth = 800;
        const calculatedSize = Math.floor(maxCanvasWidth / cols);
        // Ensure at least 40px for touch targets, otherwise scroll
        return Math.min(Math.max(calculatedSize, 40), 60);
    }, [cols]);

    const toggleCell = useCallback((row: number, col: number) => {
        const key = `${row}-${col}`;
        setFilledCells(prev => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    }, []);

    const fillAll = () => {
        const all = new Set<string>();
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                all.add(`${r}-${c}`);
            }
        }
        setFilledCells(all);
    };

    const clearAll = () => setFilledCells(new Set());

    const panelCount = filledCells.size;
    const coverageArea = (panelCount * PANEL_SIZE * PANEL_SIZE) / 10000; // m²
    const totalPrice = panelCount * PANEL_PRICE;

    // Reset cells when dimensions change
    const handleWidthChange = (value: number) => {
        setWallWidth(value);
        setFilledCells(new Set());
    };

    const handleHeightChange = (value: number) => {
        setWallHeight(value);
        setFilledCells(new Set());
    };

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (panelCount === 0) {
            alert('Lütfen en az bir panel ekleyin.');
            return;
        }

        // Map colors to existing images
        let imagePath = '/images/product-black.png';
        switch (selectedColor.id) {
            case 'cream': imagePath = '/images/product-beige.png'; break;
            case 'navy': imagePath = '/images/product-blue.png'; break;
            case 'gray': imagePath = '/images/product-macro.png'; break; // Use macro as gray fallback
            default: imagePath = '/images/product-black.png';
        }

        addToCart({
            id: `air-mesh-${selectedColor.id}`,
            name: `Air Mesh Panel (${selectedColor.name})`,
            colorHex: selectedColor.hex,
            price: PANEL_PRICE,
            image: imagePath,
            quantity: panelCount
        });


    };

    return (
        <main className={styles.main}>
            {/* Standard Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroBg}>
                    <Image
                        src="/images/room-studio.png"
                        alt="Konfigüratör"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.overlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Kendi Duvarını Tasarla
                    </h1>
                    <p className={styles.subtitle}>
                        Duvar boyutlarınızı girin, panelleri yerleştirin ve projenizin maliyetini anında hesaplayın.
                    </p>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Sidebar Controls */}
                    <aside className={styles.sidebar}>
                        {/* Dimensions */}
                        <div className={styles.controlGroup}>
                            <span className={styles.controlLabel}>Duvar Boyutları</span>
                            <div className={styles.dimensionInputs}>
                                <div className={styles.inputRow}>
                                    <span className={styles.inputLabel}>Genişlik</span>
                                    <input
                                        type="range"
                                        min="1"
                                        max="8"
                                        step="0.5"
                                        value={wallWidth}
                                        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <span className={styles.inputValue}>{wallWidth}m</span>
                                </div>
                                <div className={styles.inputRow}>
                                    <span className={styles.inputLabel}>Yükseklik</span>
                                    <input
                                        type="range"
                                        min="1"
                                        max="4"
                                        step="0.5"
                                        value={wallHeight}
                                        onChange={(e) => handleHeightChange(parseFloat(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <span className={styles.inputValue}>{wallHeight}m</span>
                                </div>
                            </div>
                        </div>

                        {/* Color Selector */}
                        <div className={styles.controlGroup}>
                            <span className={styles.controlLabel}>Panel Rengi</span>
                            <div className={styles.colorOptions}>
                                {COLORS.map((color) => (
                                    <button
                                        key={color.id}
                                        className={`${styles.colorOption} ${selectedColor.id === color.id ? styles.active : ''}`}
                                        style={{ backgroundColor: color.hex }}
                                        onClick={() => setSelectedColor(color)}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                            <span className={styles.selectedColorName}>
                                Seçilen: <strong>{selectedColor.name}</strong>
                            </span>
                        </div>

                        {/* Quick Actions */}
                        <div className={styles.controlGroup}>
                            <span className={styles.controlLabel}>Hızlı İşlemler</span>
                            <div className={styles.presets}>
                                <button className={`${styles.presetBtn} ${styles.fillBtn}`} onClick={fillAll}>
                                    Tümünü Doldur
                                </button>
                                <button className={`${styles.presetBtn} ${styles.clearBtn}`} onClick={clearAll}>
                                    Temizle
                                </button>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className={styles.summaryCard}>
                            <span className={styles.controlLabel}>Özet</span>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Panel Sayısı</span>
                                <span className={styles.summaryValue}>{panelCount} adet</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Kaplama Alanı</span>
                                <span className={styles.summaryValue}>{coverageArea.toFixed(2)} m²</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Duvar Alanı</span>
                                <span className={styles.summaryValue}>{(wallWidth * wallHeight).toFixed(1)} m²</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Toplam Fiyat</span>
                                <span className={`${styles.summaryValue} ${styles.totalPrice}`}>
                                    {totalPrice.toLocaleString('tr-TR')} ₺
                                </span>
                            </div>
                            <button className={styles.orderButton} onClick={handleAddToCart}>
                                Sepete Ekle
                            </button>
                        </div>
                    </aside>

                    {/* Canvas Area */}
                    <div className={styles.canvasArea}>
                        <div className={styles.canvasWrapper}>
                            <div
                                className={styles.wallCanvas}
                                style={{
                                    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
                                    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
                                }}
                            >
                                {Array.from({ length: rows }).map((_, row) =>
                                    Array.from({ length: cols }).map((_, col) => {
                                        const key = `${row}-${col}`;
                                        const isFilled = filledCells.has(key);
                                        return (
                                            <div
                                                key={key}
                                                className={`${styles.cell} ${isFilled ? styles.filled : ''}`}
                                                style={isFilled ? { backgroundColor: selectedColor.hex } : undefined}
                                                onClick={() => toggleCell(row, col)}
                                            />
                                        );
                                    })
                                )}
                            </div>
                        </div>
                        <div className={styles.canvasInfo}>
                            <span>
                                <div className={`${styles.legendSquare} ${styles.empty}`} />
                                Boş Alan
                            </span>
                            <span>
                                <div className={`${styles.legendSquare} ${styles.filled}`} style={{ backgroundColor: selectedColor.hex }} />
                                Air Mesh Panel ({PANEL_SIZE}x{PANEL_SIZE}cm)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
