import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = 'https://www.arnee.com.tr'; // Replace with actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/hesabim/', '/api/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
