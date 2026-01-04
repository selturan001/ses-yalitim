import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import styles from './SearchPage.module.css';

export const dynamic = 'force-dynamic'; // Force dynamic rendering for search results

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const q = (await searchParams).q;
    const query = typeof q === 'string' ? q : '';

    if (!query) {
        return (
            <main className={styles.main}>
                <h1>Arama yapmak için bir kelime giriniz.</h1>
            </main>
        );
    }

    const products = await prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: query } }, // Case insensitive usually depends on DB collation
                { description: { contains: query } }
            ]
        }
    });

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>"{query}" için arama sonuçları</h1>
                <p>{products.length} ürün bulundu.</p>
            </div>

            {products.length === 0 ? (
                <div className={styles.noResults}>
                    <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                    <Link href="/" className={styles.backLink}>Anasayfaya Dön</Link>
                </div>
            ) : (
                <div className={styles.grid}>
                    {products.map(product => (
                        <Link href={`/urunler/${product.slug}`} key={product.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className={styles.content}>
                                <h3>{product.name}</h3>
                                <p className={styles.price}>{(product.price / 100).toLocaleString('tr-TR')} TL</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
