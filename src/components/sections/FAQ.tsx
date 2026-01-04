'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "Komşudan gelen sesi tamamen keser mi?",
        answer: "Hayır. Air Mesh bir 'ses yutucu' paneldir, 'ses kesici' bariyer değildir. Odanızdaki yankıyı alarak sesi netleştirir ve gürültü karmaşasını azaltır, ancak yan daireden gelen yüksek sesleri (bağırma, TV vb.) tamamen engellemek için yapısal ses yalıtımı (inşaat) gerekir."
    },
    {
        question: "Uygulamayı kendim yapabilir miyim?",
        answer: "Kesinlikle! Air Mesh paneller kendinden yapışkanlıdır. Arkasındaki koruyucu bandı çıkarıp temiz ve kuru yüzeye yapıştırmanız yeterlidir. Ekstra yapıştırıcıya ihtiyacınız yoktur."
    },
    {
        question: "Duvarda iz bırakır mı?",
        answer: "Güçlü bir yapışkana sahiptir. Çıkarılırken boyanın durumuna göre iz bırakabilir veya boyayı kaldırabilir. Kiracıysanız veya geçici kullanım düşünüyorsanız, paneli bir kontraplak veya mukavva üzerine yapıştırıp duvara asmanızı öneririz."
    },
    {
        question: "Ürün sağlığa zararlı mı?",
        answer: "Hayır. Air Mesh, zararlı kimyasallar içermeyen, kokusuz ve güvenli malzemeden üretilmiştir. Ev ortamında, çocuk ve evcil hayvanların bulunduğu alanlarda güvenle kullanılabilir."
    },
    {
        question: "Hangi kalınlığı seçmeliyim?",
        answer: "Genel yankı problemleri ve konuşma sesi kontrolü için 20mm Air Mesh (NRC 0.95) oldukça etkilidir. Daha düşük frekanslı (baz) sesleri kontrol etmek için daha kalın modellere veya bas tuzaklarına (bass trap) ihtiyaç duyabilirsiniz."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Sıkça Sorulan Sorular</h2>
                    <p className={styles.subtitle}>
                        Aklınıza takılanlar için şeffaf cevaplar.
                    </p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.question}
                                <span className={styles.icon}>
                                    <Plus size={24} />
                                </span>
                            </button>
                            <div className={styles.answer}>
                                <div className={styles.answerText}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
