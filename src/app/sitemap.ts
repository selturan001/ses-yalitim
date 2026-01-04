import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

const BASE_URL = 'https://www.arnee.com.tr'; // Replace with actual domain when live

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static Routes
    const routes = [
        '',
        '/hakkimizda',
        '/vizyon',
        '/iletisim',
        '/cozumler',
        '/teknoloji',
        '/konfigurator',
        '/gizlilik-ve-guvenlik',
        '/iade-kosullari',
        '/mesafeli-satis-sozlesmesi',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Product Routes
    try {
        const products = await prisma.product.findMany({
            select: { slug: true, createdAt: true }
        });

        const productRoutes = products.map((product) => ({
            url: `${BASE_URL}/urunler/${product.slug}`,
            lastModified: product.createdAt,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

        return [...routes, ...productRoutes];
    } catch (error) {
        console.error('Sitemap generation error:', error);
        return routes;
    }
}
