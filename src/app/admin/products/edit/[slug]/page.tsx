import { prisma } from '@/lib/prisma';
import ProductForm from '@/components/admin/ProductForm';
import { notFound } from 'next/navigation';

export default async function EditProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    const product = await prisma.product.findUnique({
        where: { slug: slug }
    });

    if (!product) {
        // Try ID fallback if slug lookup fails (legacy support)
        const productById = await prisma.product.findUnique({
            where: { id: slug }
        });

        if (!productById) return notFound();

        // Use the product found by ID
        return <ProductForm initialData={productById} isEdit={true} />;
    }

    return <ProductForm initialData={product} isEdit={true} />;
}
