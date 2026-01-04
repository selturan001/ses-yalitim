import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
    // 1. Seed Products
    // Clear existing products to fix broken data
    await prisma.product.deleteMany({});

    // 1. Seed Products
    const products = [
        {
            name: 'AİR MESH - ANTRASİT SİYAH',
            slug: 'air-mesh-black',
            description: 'Derin siyah mat yüzey. Sinematik ve profesyonel stüdyo görünümü için ideal.',
            price: 19900,
            image: '/images/product-black.png',
            color: 'Siyah',
            colorHex: '#1a1a1a',
            stock: 100
        },
        {
            name: 'AİR MESH - BORDO KIRMIZI',
            slug: 'air-mesh-red',
            description: 'Tutkulu ve enerjik. Odanıza sıcaklık ve karakter katar, özel renk tonu.',
            price: 19900,
            image: '/images/product-red.png',
            color: 'Kırmızı',
            colorHex: '#c0392b',
            stock: 50
        },
        {
            name: 'AİR MESH - OKYANUS MAVİ',
            slug: 'air-mesh-blue',
            description: 'Sakin ve odaklayıcı. Çalışma alanları ve ofisler için mükemmel seçim.',
            price: 19900,
            image: '/images/product-blue.png',
            color: 'Mavi',
            colorHex: '#084869',
            stock: 75
        },
        {
            name: 'AİR MESH - KREM BEJ',
            slug: 'air-mesh-beige',
            description: 'Doğal ve ferah. Aydınlık mekanlar ve minimalist İskandinav tasarımlar için.',
            price: 19900,
            image: '/images/product-beige.png',
            color: 'Bej',
            colorHex: '#F5F5DC',
            stock: 60
        }
    ];

    for (const product of products) {
        await prisma.product.create({ data: product });
    }
    console.log('Products seeded successfully (Clean Slate).');

    // 2. Seed Admin User
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@arnee.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    const hashedPassword = await hash(adminPassword, 12);

    const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!existingAdmin) {
        await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                name: 'System Admin',
                role: 'admin'
            }
        });
        console.log('Admin user seeded:', adminEmail);
    } else {
        console.log('Admin user already exists.');
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
