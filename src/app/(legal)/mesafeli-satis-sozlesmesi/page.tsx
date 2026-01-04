import styles from '../legal.module.css';
import { COMPANY_INFO } from '@/lib/contracts';

export const metadata = {
    title: 'Mesafeli Satış Sözleşmesi | Arnee Akustik',
    description: 'Arnee Akustik standart mesafeli satış sözleşmesi.'
};

export default function DistanceSalesContractPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Mesafeli Satış Sözleşmesi (Örnek)</h1>

            <div className={styles.section}>
                <p>Bu metin, internet sitemizden alışveriş yapan tüm kullanıcılar için geçerli genel hükümleri içerir. Sipariş anında size özel oluşturulan ve onayınıza sunulan sözleşme geçerlidir.</p>
            </div>

            <div className={styles.section}>
                <h2>1. Taraflar</h2>
                <p><strong>SATICI:</strong> {COMPANY_INFO.name}</p>
                <p><strong>ALICI:</strong> Sipariş veren müşteri.</p>
            </div>

            <div className={styles.section}>
                <h2>2. Konu</h2>
                <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesinden elektronik ortamda siparişini yaptığı ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
            </div>

            <div className={styles.section}>
                <h2>3. Cayma Hakkı</h2>
                <p>ALICI, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren 14 gün içinde cayma hakkına sahiptir.</p>
            </div>

            <div className={styles.section}>
                <p>Detaylı bilgi ve siparişinize özel sözleşme için ödeme sayfasındaki onay metnini inceleyiniz.</p>
            </div>
        </main>
    );
}
