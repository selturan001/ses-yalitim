import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Note: We might want conflict resolution with the main Navbar/Footer. 
    // Ideally, Admin pages should NOT have the main site Navbar and Footer.
    // Since this is a nested layout in /app/admin, it wraps children.
    // However, root layout (/app/layout.tsx) adds Navbar/Footer to everything.
    // To cleanly separate, we usually use Route Groups like (shop) and (admin).
    // Given the current structure, we'll just add the sidebar. The main Navbar will still be visible at top.
    // We can hide it via CSS or just live with it. For better UX, let's push content.

    return (
        <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '80px' }}>
            {/* paddingTop to account for main fixed Navbar if it exists, or just spacing */}

            <AdminSidebar />

            <div style={{ flex: 1, marginLeft: '250px', padding: '32px', backgroundColor: '#fff' }}>
                {children}
            </div>
        </div>
    );
}
