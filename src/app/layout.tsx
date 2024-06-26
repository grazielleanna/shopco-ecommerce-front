import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ToastProvider } from "@/libs/react-toastify";
import ReactQueryProvider from "@/libs/react-query";

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Shop.co",
  description: "E-commerce shop.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        <ToastProvider>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
