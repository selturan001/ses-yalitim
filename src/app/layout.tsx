import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnee Akustik | Sessizliğin Mimarı",
  description: "Arnee Akustik Air Mesh teknolojisi ile mekanlarınızda premium ses yalıtımı sağlayın.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/shop/CartSidebar";
import SessionProvider from "@/components/providers/SessionProvider";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <CartProvider>
          <SessionProvider>
            <Navbar />
            <CartSidebar />
            {children}
            <Footer />
            {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
          </SessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
