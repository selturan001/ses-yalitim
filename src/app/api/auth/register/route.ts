import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email ve şifre zorunludur.' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'Bu email ile kayıtlı kullanıcı var.' },
                { status: 400 }
            );
        }

        const hashedPassword = await hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                role: 'customer'
            }
        });

        return NextResponse.json({
            message: 'Kullanıcı oluşturuldu.',
            user: { email: user.email, name: user.name }
        });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json(
            { error: 'Kayıt sırasında bir hata oluştu.' },
            { status: 500 }
        );
    }
}
