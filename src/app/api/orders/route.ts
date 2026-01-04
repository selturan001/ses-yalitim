import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


export async function GET() {
    try {
        const orders = await prisma.order.findMany({
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json(
            { error: 'Error fetching orders' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { customer, items, total } = body;

        // Create random order number
        const orderNumber = 'ARN-' + Math.floor(100000 + Math.random() * 900000);

        // Calculate total again from database prices for security (skip for this dummy demo, using client total)
        // In real app, re-fetch prices.

        const order = await prisma.order.create({
            data: {
                orderNumber,
                status: 'PAID', // Auto-paid for dummy flow
                customerName: `${customer.firstName} ${customer.lastName}`,
                customerEmail: customer.email,
                customerPhone: customer.phone || '',
                shippingAddress: customer.address,
                city: customer.city,
                postalCode: customer.zipCode || '',
                subtotal: total.toFixed(2).replace('.', '') * 1, // Store as integer (cents/kuruş) if needed, but our seed uses ints. 
                // IMPORTANT: Seed price is 19900 (199.00). 
                // Client sends 199. 
                // Let's multiply by 100 to consistency.
                shippingCost: 0,
                total: Math.round(total * 100),
                items: {
                    create: items.map((item: any) => ({
                        productId: item.id,
                        quantity: item.quantity,
                        price: Math.round(item.price * 100) // Convert to kuruş
                    }))
                }
            }
        });

        return NextResponse.json(order);

    } catch (error) {
        console.error('Order creation error:', error);
        return NextResponse.json(
            { error: 'Sipariş oluşturulamadı' },
            { status: 500 }
        );
    }
}
