import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug;

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: slug
            }
        });

        // Fallback: If not found by ID, try finding by actual slug (since filename is [slug])
        if (!product) {
            const productBySlug = await prisma.product.findUnique({
                where: {
                    slug: slug
                }
            });

            if (productBySlug) return NextResponse.json(productBySlug);

            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Error fetching product' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const slug = (await params).slug;

    try {
        await prisma.product.delete({
            where: { id: slug }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        // Try deleting by slug if id fails (handle flexible usage)
        try {
            await prisma.product.delete({
                where: { slug: slug }
            });
            return NextResponse.json({ success: true });
        } catch (e) {
            console.error('Delete error:', error);
            return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
        }
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const slug = (await params).slug;
    const body = await request.json();

    try {
        const product = await prisma.product.update({
            where: { id: slug },
            data: {
                name: body.name,
                slug: body.slug,
                description: body.description,
                price: parseFloat(body.price),
                stock: parseInt(body.stock),
                image: body.image,
                color: body.color,
                colorHex: body.colorHex,
            }
        });
        return NextResponse.json(product);
    } catch (error) {
        console.error('Update error:', error);
        return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
}
