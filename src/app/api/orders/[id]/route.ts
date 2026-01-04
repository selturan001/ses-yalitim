import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// UPDATE Order Status
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // Correct type for Next.js 15+ dynamic routes
) {
    const session = await getServerSession(authOptions);

    // Check Admin Role
    if (!session || session.user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params; // Await params in newer Next.js versions
        const body = await request.json();
        const { status } = body;

        const updatedOrder = await prisma.order.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedOrder);
    } catch (error) {
        console.error('Error updating order:', error);
        return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
    }
}

// DELETE Order
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);

    // Check Admin Role
    if (!session || session.user.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;
        await prisma.order.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
    }
}
