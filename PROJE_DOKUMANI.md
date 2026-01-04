# Arnee Akustik - Proje Dokümanı
> **Versiyon:** 1.0  
> **Tarih:** 4 Ocak 2026  
> **Durum:** Geliştirme Aşaması

---

## 1. PROJE ÖZETİ

### 1.1 Amaç
Arnee Akustik, **Air Mesh** adlı yenilikçi ses yalıtım teknolojisini tanıtan ve satan premium bir marka web sitesidir. Site, ürünün teknik üstünlüklerini sinematik ve minimal bir tasarımla sunarak, hedef kitlede güven ve prestij algısı oluşturmayı amaçlar.

### 1.2 Marka Sloganı
> **"Sessizliğin Mimarı"**

### 1.3 Benzersiz Değer Önerileri
- Geleneksel yumurta süngerlerine göre estetik ve fonksiyonel üstünlük
- Kolay uygulama (yapıştırma ile montaj)
- Premium görünüm (minimalist, mimari estetik)
- Profesyonel akustik performans

---

## 2. HEDEF KİTLE

### 2.1 Birincil Hedef Kitle
| Segment | Açıklama |
|---------|----------|
| **Ev Stüdyosu Sahipleri** | Podcast, YouTube, müzik prodüksiyonu yapan bireyler |
| **Müzisyenler** | Evde kayıt yapan amatör ve profesyonel müzisyenler |
| **Oyuncular (Gamers)** | Streaming yapan, ses kalitesine önem veren oyuncular |
| **Uzaktan Çalışanlar** | Ev ofisinde toplantı yapan profesyoneller |

### 2.2 İkincil Hedef Kitle
| Segment | Açıklama |
|---------|----------|
| **Mimarlar / İç Mimarlar** | Projelerinde akustik çözüm arayan profesyoneller |
| **Ticari Mekanlar** | Ofisler, toplantı odaları, stüdyolar |
| **Eğitim Kurumları** | Müzik odaları, kayıt stüdyoları |

### 2.3 Kullanıcı Psikolojisi
- "Yumurta süngeri çirkin, daha iyi bir çözüm olmalı" düşüncesi
- Estetik ve fonksiyonu bir arada isteyen kitle
- Premium ürünlere yatırım yapmaya istekli
- Sosyal medyada paylaşılabilir mekanlar oluşturmak isteyen

---

## 3. TASARIM SİSTEMİ

### 3.1 Renk Paleti

```css
/* Ana Renkler */
--color-bg-primary: #050505;      /* Derin Siyah - Ana arka plan */
--color-bg-secondary: #0A0A0A;    /* Zengin Siyah */
--color-bg-tertiary: #111111;     /* Panel Gri */

/* Metin Renkleri */
--color-text-primary: #F5F5F7;    /* Apple tarzı kirli beyaz */
--color-text-secondary: #A1A1A6;  /* Platin Gri */
--color-text-muted: #6e6e73;      /* Soluk metin */

/* Vurgu Renkleri */
--color-accent: #D4AF37;          /* Mat Altın - Ana vurgu */
--color-accent-hover: #F2C94C;    /* Hover durumu */
--color-accent-glow: rgba(212, 175, 55, 0.3); /* Parıltı efekti */

/* Kenarlık */
--color-border: #1d1d1f;
```

### 3.2 Tasarım Felsefesi
- **Sinematik Dark Theme:** Apple, Tesla, lüks otomobil markalarından ilham
- **Minimal ve Temiz:** Gereksiz öğelerden arındırılmış
- **Mimari Hissiyat:** Keskin köşeler, geometrik formlar
- **Premium Algısı:** Altın vurgular, incelikli animasyonlar

### 3.3 Tipografi

```css
/* Başlıklar */
font-family: 'Oswald', sans-serif;
text-transform: uppercase;
letter-spacing: 0.05em;

/* Gövde Metni */
font-family: 'Inter', sans-serif;
line-height: 1.6;
```

### 3.4 UI Bileşenleri
- **Butonlar:** Keskin köşeli (border-radius: 0), altın arka plan
- **Kartlar:** İnce kenarlık, hover'da altın glow efekti
- **Bölümler:** Geniş padding (120px dikey), tam genişlik
- **Görsel Kutular:** Gradient arka plan, blur efektleri

---

## 4. TEKNOLOJİ STACK

### 4.1 Framework
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **Next.js** | 16.x | React tabanlı SSR/SSG framework |
| **React** | 19.x | UI kütüphanesi |
| **TypeScript** | 5.x | Tip güvenliği |

### 4.2 Stillendirme
| Yaklaşım | Açıklama |
|----------|----------|
| **CSS Modules** | Bileşen bazlı, scoped CSS |
| **CSS Variables** | Global tema değişkenleri (`globals.css`) |
| **Vanilla CSS** | Tailwind KULLANILMAYACAK |

> ⚠️ **ÖNEMLİ:** Bu projede Tailwind CSS kullanılmayacaktır. Tüm stiller CSS Modules ve global CSS değişkenleri ile yazılacaktır.

### 4.3 Diğer Bağımlılıklar
| Paket | Amaç |
|-------|------|
| `lucide-react` | İkon kütüphanesi |

---

## 5. SAYFA YAPISI VE İÇERİK PLANI

### 5.1 Site Haritası

```
/                       → Ana Sayfa
/hakkimizda             → Hakkımızda (About)
/vizyon                 → Vizyon (Vision/Future)
/urunler/air-mesh       → Ürün Detay: Air Mesh
/teknoloji              → Teknoloji Sayfası
/uygulama               → Kurulum/Uygulama Rehberi
/iletisim               → İletişim Formu
```

### 5.2 Sayfa Detayları

#### 5.2.1 Ana Sayfa (`/`)
| Bölüm | İçerik |
|-------|--------|
| **Hero** | Tam ekran, sinematik görsel, ana slogan |
| **Kullanım Alanları** | Ev stüdyosu, ofis, yatak odası showcase |
| **Teknik Özellikler** | NRC değeri, malzeme bilgisi, karşılaştırma |
| **Kolay Uygulama** | Montaj kolaylığını anlatan bölüm |
| **CTA** | İletişim/satın alma yönlendirmesi |

#### 5.2.2 Hakkımızda (`/hakkimizda`)
| Bölüm | İçerik |
|-------|--------|
| **Hero** | "Sessizliğin Mimarıyız" başlığı |
| **Misyon** | Marka hikayesi ve vizyonu |
| **Değerler** | Kalite, Estetik, Erişilebilirlik |
| **CTA** | İletişim yönlendirmesi |

#### 5.2.3 Vizyon (`/vizyon`)
| Bölüm | İçerik |
|-------|--------|
| **Sinematik Intro** | "VISION 2026" başlığı, tam ekran |
| **Teknoloji & Doğa** | Air Mesh'in ilham kaynağı |
| **Gelecek Özellikleri** | Akıllı yalıtım, sürdürülebilirlik, modüler tasarım |
| **CTA** | Deneyimin parçası ol |

#### 5.2.4 Ürün Detay (`/urunler/air-mesh`)
| Bölüm | İçerik |
|-------|--------|
| **Ürün Hero** | Ürün görseli, ana özellikler |
| **Özellik Listesi** | Teknik detaylar, boyutlar, renk seçenekleri |
| **Karşılaştırma** | Geleneksel sünger vs Air Mesh |
| **Galeri** | Uygulama görselleri |
| **Fiyat/Sipariş** | CTA butonu |

#### 5.2.5 Teknoloji (`/teknoloji`)
| Bölüm | İçerik |
|-------|--------|
| **Giriş** | Air Mesh teknolojisi nedir? |
| **Nasıl Çalışır** | Hücresel yapı, ses emilimi |
| **Performans** | Test sonuçları, grafikler |
| **Sertifikalar** | Varsa sertifika bilgileri |

#### 5.2.6 İletişim (`/iletisim`)
| Bölüm | İçerik |
|-------|--------|
| **Form** | İsim, e-posta, mesaj |
| **İletişim Bilgileri** | Telefon, e-posta, adres |
| **Harita** | Konum (opsiyonel) |

---

## 6. KLASÖR YAPISI

```
ses-yalitim/
├── public/
│   ├── assets/           # Statik dosyalar (görseller, videolar)
│   └── images/           # Ürün görselleri
├── src/
│   ├── app/
│   │   ├── globals.css   # Global stiller ve tema değişkenleri
│   │   ├── layout.tsx    # Ana layout (Navbar dahil)
│   │   ├── page.tsx      # Ana sayfa
│   │   ├── page.module.css
│   │   ├── hakkimizda/
│   │   │   ├── page.tsx
│   │   │   └── Hakkimizda.module.css
│   │   ├── vizyon/
│   │   │   ├── page.tsx
│   │   │   └── Vizyon.module.css
│   │   ├── urunler/
│   │   │   └── air-mesh/
│   │   │       ├── page.tsx
│   │   │       └── AirMesh.module.css
│   │   ├── teknoloji/
│   │   │   ├── page.tsx
│   │   │   └── Teknoloji.module.css
│   │   └── iletisim/
│   │       ├── page.tsx
│   │       └── Iletisim.module.css
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   ├── Navbar.module.css
│       │   ├── Footer.tsx
│       │   └── Footer.module.css
│       └── sections/
│           ├── Hero.tsx
│           ├── Hero.module.css
│           └── ... (diğer bölüm bileşenleri)
├── package.json
├── tsconfig.json
├── next.config.ts
└── PROJE_DOKUMANI.md     # Bu dosya
```

---

## 7. GELİŞTİRME ADIMLARI

### 7.1 Projeyi Sıfırdan Başlatma

```bash
# 1. Mevcut klasörü temizle
rm -rf node_modules .next package-lock.json

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev

# 4. Tarayıcıda aç
# http://localhost:3000
```

### 7.2 Geliştirme Sırası (Önerilen)
1. **globals.css** - Tema değişkenlerini ve global stilleri kur
2. **Navbar** - Navigasyon bileşenini tamamla
3. **Footer** - Alt bilgi bileşenini oluştur
4. **Ana Sayfa** - Hero, bölümler, CTA
5. **Hakkımızda** - Statik içerik sayfası
6. **Vizyon** - Sinematik sayfa
7. **Ürün Detay** - Air Mesh sayfası
8. **Teknoloji** - Teknik bilgi sayfası
9. **İletişim** - Form sayfası

### 7.3 Kod Yazım Kuralları
- Her sayfa için ayrı `.module.css` dosyası
- Tailwind CSS **kesinlikle kullanılmayacak**
- Renkler için CSS değişkenleri kullanılacak (`var(--color-accent)`)
- TypeScript ile tip güvenliği sağlanacak
- Bileşenler fonksiyonel React bileşenleri olacak

---

## 8. NOTLAR VE UYARILAR

> ⚠️ **Tailwind CSS:** Bu projede Tailwind kullanılmayacaktır. Eğer herhangi bir sayfada `className="bg-black text-white"` gibi Tailwind sınıfları görürseniz, bunları CSS Modules'a dönüştürün.

> ✅ **Doğru Yaklaşım:**
> ```tsx
> import styles from './Sayfa.module.css';
> <div className={styles.container}>...</div>
> ```

> ❌ **Yanlış Yaklaşım:**
> ```tsx
> <div className="bg-black min-h-screen text-white">...</div>
> ```

---

## 9. REFERANS VE İLHAM KAYNAKLARI

- Apple.com (Dark theme, minimal tasarım)
- Tesla.com (Sinematik hero, premium hissiyat)
- Bang & Olufsen (Ürün sunumu)
- Aesop (Marka hikayesi anlatımı)

---

## 10. İLETİŞİM

Proje ile ilgili sorularınız için:
- E-posta: [info@arnee.com]
- Telefon: [Telefon numarası]

---

*Bu doküman, projenin tek gerçek kaynağıdır. Herhangi bir değişiklik yapılmadan önce bu doküman güncellenmelidir.*
