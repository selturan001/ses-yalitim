export const COMPANY_INFO = {
    name: 'Arnee Akustik Mimarlık San. Tic. Ltd. Şti.',
    address: 'Atatürk Mah. Çavuşbaşı Cad. No:123 Çekmeköy/İSTANBUL',
    phone: '+90 216 000 00 00',
    email: 'info@arnee.com',
    mersis: '123456789000001',
    website: 'www.arnee.com'
};

export const generateDistanceSalesContract = (buyer: any, items: any[], total: number) => {
    const date = new Date().toLocaleDateString('tr-TR');

    return `
    <h3>MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
    <p><strong>MADDE 1 - TARAFLAR</strong></p>
    <p><strong>SATICI:</strong><br>
    Unvan: ${COMPANY_INFO.name}<br>
    Adres: ${COMPANY_INFO.address}<br>
    Telefon: ${COMPANY_INFO.phone}<br>
    E-posta: ${COMPANY_INFO.email}</p>
    
    <p><strong>ALICI:</strong><br>
    Ad Soyad: ${buyer.firstName} ${buyer.lastName}<br>
    Adres: ${buyer.address} ${buyer.city}/${buyer.zipCode}<br>
    Telefon: ${buyer.phone}<br>
    E-posta: ${buyer.email}</p>
    
    <p><strong>MADDE 2 - KONU</strong></p>
    <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait ${COMPANY_INFO.website} internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>
    
    <p><strong>MADDE 3 - SÖZLEŞME KONUSU ÜRÜN VE BEDELİ</strong></p>
    <table border="1" cellpadding="5" cellspacing="0" width="100%">
        <tr>
            <th>Ürün Adı</th>
            <th>Adet</th>
            <th>Birim Fiyat</th>
            <th>Toplam Tutar</th>
        </tr>
        ${items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${(item.price / 100).toFixed(2)} TL</td>
            <td>${((item.price * item.quantity) / 100).toFixed(2)} TL</td>
        </tr>
        `).join('')}
    </table>
    <p><strong>Toplam Sipariş Tutarı: ${(total / 100).toFixed(2)} TL</strong></p>

    <p><strong>MADDE 4 - GENEL HÜKÜMLER</strong></p>
    <p>4.1. ALICI, internet sitesinde ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</p>
    <p>4.2. SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun teslim edilmesinden sorumludur.</p>
    
    <p><strong>MADDE 5 - CAYMA HAKKI</strong></p>
    <p>ALICI, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren 14 gün içinde cayma hakkına sahiptir. Özel üretim (custom) ürünlerde cayma hakkı kullanılamaz.</p>
    
    <p><strong>Tarih:</strong> ${date}</p>
    `;
};

export const generatePreliminaryForm = (buyer: any, items: any[], total: number) => {
    return `
    <h3>ÖN BİLGİLENDİRME FORMU</h3>
    <p><strong>1. SATICI BİLGİLERİ</strong></p>
    <p>Unvan: ${COMPANY_INFO.name}<br>
    Adres: ${COMPANY_INFO.address}<br>
    İletişim: ${COMPANY_INFO.phone} | ${COMPANY_INFO.email}</p>
    
    <p><strong>2. ÜRÜN BİLGİLERİ</strong></p>
    <ul>
    ${items.map(item => `<li>${item.name} - ${item.quantity} Adet - ${(item.price / 100).toFixed(2)} TL</li>`).join('')}
    </ul>
    <p><strong>Toplam Tutar: ${(total / 100).toFixed(2)} TL</strong></p>
    
    <p><strong>3. TESLİMAT</strong></p>
    <p>Ürünler en geç 30 gün içinde kargoya verilir.</p>
    
    <p><strong>4. CAYMA HAKKI</strong></p>
    <p>14 gün içinde koşulsuz iade hakkınız vardır. İade kargo masrafı SATICI'ya aittir (Anlaşmalı kargo ile gönderimlerde).</p>
    `;
};
