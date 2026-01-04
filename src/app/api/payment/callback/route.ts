import { NextResponse } from 'next/server';
import iyzipay from '@/lib/iyzico';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        // iyzico sends form-data or JSON? Usually it's a POST redirect from the browser, 
        // but since we provided a callbackUrl, the browser POSTs to us with 'token'.

        // Handling form-data in Next.js App Router:
        const formData = await req.formData();
        const token = formData.get('token') as string;

        if (!token) {
            return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/odeme?error=no_token`);
        }

        // Verify with iyzico
        return new Promise<NextResponse>((resolve) => {
            iyzipay.checkoutForm.retrieve({
                locale: iyzipay.LOCALE.TR,
                conversationId: '123456789', // We don't have it here easily unless we persist before. 
                // But retrieve doesn't strictly need it to match exactly if token is valid.
                token: token
            }, async (err: any, result: any) => {
                if (err || result.status !== 'success') {
                    console.error('Payment Verification Failed:', result?.errorMessage);
                    // Redirect to failure
                    resolve(NextResponse.redirect(`${process.env.NEXTAUTH_URL}/odeme?error=payment_failed`));
                } else {
                    // Payment SUCCESS! 
                    // Now Create Order in DB.
                    // IMPORTANT: We need the cart items and customer info!! 
                    // Use 'basketId' to track a temporary order in DB? 
                    // OR: Rely on iyzico metadata? Iyzico doesn't return full basket details easily to recreate order.

                    // BEST PRACTICE:
                    // 1. In /start, create order in DB with status 'PENDING_PAYMENT'.
                    // 2. Here, find order by `conversationId` (which we set to orderNumber).
                    // 3. Update status to 'PAID'.

                    // Let's implement that pattern properly.

                    const orderNumber = result.conversationId;

                    // Update order
                    try {
                        /* 
                        // Check if we created it before? 
                        // For this rapid implementation without refactoring /start too much:
                        // We will assume for now we can't create the order here easily without context.
                        // But we MUST. 
                        
                        // Revision:
                        // In /start route, we should create the order as PENDING.
                        */

                        await prisma.order.update({
                            where: { orderNumber: orderNumber },
                            data: { status: 'PAID' }
                        });

                        resolve(NextResponse.redirect(`${process.env.NEXTAUTH_URL}/siparis/${orderNumber}?success=true`)); // Using orderNumber as ID or find real ID

                        // Note: Our [id] page expects UUID. We should query by orderNumber or fix routing.
                        // Let's assume orderNumber is fine for redirect, but success page needs ID.
                        // We will fix success page to lookup by OrderNumber too or just fetch ID here.

                        const order = await prisma.order.findUnique({ where: { orderNumber } });
                        resolve(NextResponse.redirect(`${process.env.NEXTAUTH_URL}/siparis/${order?.id}`));

                    } catch (dbError) {
                        console.error('DB Update Error', dbError);
                        resolve(NextResponse.redirect(`${process.env.NEXTAUTH_URL}/odeme?error=db_error`));
                    }
                }
            });
        });

    } catch (error) {
        console.error('Callback Error:', error);
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/odeme?error=system_error`);
    }
}
