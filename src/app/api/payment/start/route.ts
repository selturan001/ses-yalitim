import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import iyzipay from '@/lib/iyzico';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { customer, items, total, address } = body;

        const session = await getServerSession(authOptions);

        const orderNumber = 'ARN-' + Math.floor(100000 + Math.random() * 900000);

        // 1. Create Order as PENDING_PAYMENT
        await prisma.order.create({
            data: {
                orderNumber,
                userId: session?.user?.id, // Link to user if logged in
                status: 'PENDING',
                customerName: `${customer.firstName} ${customer.lastName}`,
                customerEmail: customer.email,
                customerPhone: customer.phone || '',
                shippingAddress: customer.address,
                city: customer.city,
                postalCode: customer.zipCode || '',
                subtotal: total.toFixed(2).replace('.', '') * 1,
                shippingCost: 0,
                total: Math.round(total * 100),
                items: {
                    create: items.map((item: any) => ({
                        productId: item.id,
                        quantity: item.quantity,
                        price: Math.round(item.price * 100)
                    }))
                }
            }
        });

        // Let's create the request object for iyzico
        const request = {
            locale: iyzipay.LOCALE.TR,
            conversationId: orderNumber,
            price: total.toString(),
            paidPrice: total.toString(),
            currency: iyzipay.CURRENCY.TRY,
            basketId: orderNumber,
            paymentGroup: iyzipay.PAYMENT_GROUP.PRODUCT,
            callbackUrl: `${process.env.NEXTAUTH_URL}/api/payment/callback`,
            enabledInstallments: [2, 3, 6, 9],
            buyer: {
                id: '123', // Should be user ID if logged in, or random
                name: customer.firstName,
                surname: customer.lastName,
                gsmNumber: customer.phone,
                email: customer.email,
                identityNumber: '11111111111', // Mandatory field for iyzico
                lastLoginDate: '2015-10-05 12:43:35', // Dummy
                registrationDate: '2013-04-21 15:12:09', // Dummy
                registrationAddress: customer.address,
                ip: '85.34.78.112', // Should be req.ip
                city: customer.city,
                country: 'Turkey',
                zipCode: customer.zipCode
            },
            shippingAddress: {
                contactName: `${customer.firstName} ${customer.lastName}`,
                city: customer.city,
                country: 'Turkey',
                address: customer.address,
                zipCode: customer.zipCode
            },
            billingAddress: {
                contactName: `${customer.firstName} ${customer.lastName}`,
                city: customer.city,
                country: 'Turkey',
                address: customer.address,
                zipCode: customer.zipCode
            },
            basketItems: items.map((item: any) => ({
                id: item.id,
                name: item.name,
                category1: 'Akustik Panel',
                itemType: iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
                price: item.price.toString()
            }))
        };

        // 2. Call iyzico
        return new Promise<NextResponse>((resolve) => {
            iyzipay.checkoutFormInitialize.create(request, (err: any, result: any) => {
                if (err) {
                    resolve(NextResponse.json({ error: err }, { status: 500 }));
                } else {
                    // Send the result back to frontend
                    // result.checkoutFormContent (HTML content to display)
                    // result.paymentPageUrl (URL to redirect)
                    resolve(NextResponse.json(result));
                }
            });
        });

    } catch (error) {
        console.error('Payment Init Error:', error);
        return NextResponse.json({ error: 'Payment initialization failed' }, { status: 500 });
    }
}
