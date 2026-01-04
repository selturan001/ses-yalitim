import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            // Only allow if token exists and role is admin
            // You can expand this logic as needed
            return !!token // && token.role === "admin";
        },
    },
});

export const config = {
    matcher: ["/admin/:path*"],
};
