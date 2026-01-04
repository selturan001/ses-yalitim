import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        // Custom admin check logic if needed
        // The "authorized" callback below handles the main check
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                // If the route starts with /admin (and is not login), require role 'admin'
                if (req.nextUrl.pathname.startsWith("/admin")) {
                    // Exception for login page itself
                    if (req.nextUrl.pathname === "/admin/login") {
                        return true;
                    }
                    // Must have token and be admin
                    return token?.role === "admin";
                }

                // Allow other routes (public)
                return true;
            },
        },
        pages: {
            signIn: '/hesabim/giris', // Default signin
            // We might want to redirect unauthorized admin access to /admin/login specifically,
            // but NextAuth middleware config for separate logins is tricky.
            // For now, if they are not admin, they are blocked.
        }
    }
);

export const config = {
    matcher: ["/admin/:path*"] // Apply only to admin routes
};
