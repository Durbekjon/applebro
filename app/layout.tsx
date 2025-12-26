import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PROduct - Официальный магазин Apple в Узбекистане",
  description: "Только оригинальная продукция Apple. iPhone, MacBook, iPad, AirPods, Apple Watch и аксессуары с доставкой по Узбекистану.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
