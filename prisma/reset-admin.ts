import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@arnee.com';
    const password = 'admin123';
    const hashedPassword = await hash(password, 12);

    console.log(`Resetting admin user: ${email}`);

    // Upsert: Create if not exists, Update if exists
    const user = await prisma.user.upsert({
        where: { email },
        update: {
            password: hashedPassword,
            role: 'admin' // Force role to admin
        },
        create: {
            email,
            password: hashedPassword,
            name: 'System Admin',
            role: 'admin'
        }
    });

    console.log('Admin user reset successfully.');
    console.log('Role:', user.role);
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
