import styles from '../legal.module.css';

export const metadata = {
    title: 'İade ve Değişim Koşulları | Arnee Akustik',
    description: 'Arnee Akustik ürün iade ve değişim süreçleri hakkında bilgi.'
};

export default function ReturnsPage() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>İade ve Değişim Koşulları</h1>

            <div className={styles.section}>
                <h2>1. Cayma Hakkı</h2>
                <p>Tüketici, ürünü teslim aldığı tarihten itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.</p>
            </div>

            <div className={styles.section}>
                <h2>2. İade Süreci</h2>
                <ul>
                    <li>İade etmek istediğiniz ürünün ambalajı hasar görmemiş, kullanılmamış ve yeniden satılabilir durumda olması gerekmektedir.</li>
                    <li>İade talebinizi info@arnee.com adresine sipariş numaranızla iletmeniz gerekmektedir.</li>
                    <li>Anlaşmalı kargo firmamız ile gönderilen iadelerde kargo ücreti tarafımıza aittir.</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h2>3. İade Kabul Edilmeyen Ürünler</h2>
                <p>Tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan (özel ölçü, özel renk paneller vb.) mallara ilişkin sözleşmelerde cayma hakkı kullanılamaz.</p>
            </div>
        </main>
    );
}
