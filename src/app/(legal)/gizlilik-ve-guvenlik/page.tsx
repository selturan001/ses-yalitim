import styles from '../legal.module.css';

export const metadata = {
    title: 'Gizlilik ve Güvenlik Politikası | Arnee Akustik',
    description: 'Arnee Akustik veri güvenliği ve gizlilik politikaları.'
};

export default function PrivacyPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Gizlilik ve Güvenlik Politikası</h1>

            <div className={styles.section}>
                <h2>1. Veri Toplama</h2>
                <p>Arnee Akustik olarak, sitemizi ziyaret ettiğinizde ve alışveriş yaptığınızda adınız, e-posta adresiniz, teslimat adresiniz gibi temel bilgileri toplarız. Kredi kartı bilgileriniz sunucularımızda ASLA saklanmaz; doğrudan güvenli ödeme altyapısı (iyzico) üzerinden işlenir.</p>
            </div>

            <div className={styles.section}>
                <h2>2. Çerezler (Cookies)</h2>
                <p>Sitemizdeki deneyiminizi iyileştirmek ve sepetinizin hatırlanmasını sağlamak için çerezler kullanmaktayız. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.</p>
            </div>

            <div className={styles.section}>
                <h2>3. KVKK Aydınlatma Metni</h2>
                <p>6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, verileriniz sadece siparişin işlenmesi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir. Verileriniz üçüncü şahıslarla (kargo firması ve yasal merciler hariç) paylaşılmaz.</p>
            </div>

            <div className={styles.section}>
                <h2>4. İletişim</h2>
                <p>Gizlilik politikamızla ilgili sorularınız için info@arnee.com adresinden bize ulaşabilirsiniz.</p>
            </div>
        </main>
    );
}
