import Contact from "@/components/contact/ContactDrawer";
import Footer from "@/components/Footer";
import logo from "@/public/Logo_noback.png";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "../styles/common.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nanak Spices",
  description:
    "Nanak Spices - Wholesale supplier of premium quality spices, herbs, and seasonings. Offering authentic Indian spices, competitive bulk pricing, and superior quality assurance for businesses worldwide. Your trusted partner in wholesale spice.",
  keywords:
    "Nanak Spices, wholesale spices, bulk spices, Indian spices wholesale, spice supplier, wholesale herbs, bulk seasonings, premium spices, spice exporters, commercial spices, restaurant spice supplier",
  openGraph: {
    title: "Nanak Spices | Premium Wholesale Spices",
    description:
      "Discover Nanak Spices - Your premier source for authentic wholesale spices and seasonings. Premium quality, competitive pricing, and reliable bulk supply for businesses worldwide.",
    // images:
    //   "https://res.cloudinary.com/dbfmqcjii/image/upload/v1738063626/nanak_spices_logo.png",
    url: "https://nanakspices.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanak Spices | Premium Wholesale Spices",
    description:
      "Your trusted partner for premium wholesale spices. Quality-certified Indian spices and seasonings for businesses worldwide.",
    images:
      "https://res.cloudinary.com/dbfmqcjii/image/upload/v1738063626/nanak_spices_logo.png",
  },
  authors: {
    name: "Nanak Spices",
    url: "https://nanakspices.in",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-dvh`}
      >
        <div className="flex sticky top-0 left-0 bg-transparent w-full backdrop-blur-lg z-50">
          <div className="flex gap-2 items-center h-20 p-4 w-full justify-between">
            <Link href={"/"}>
              <div className="flex items-center justify-center">
                <Image
                  alt="Nanak Spices Logo"
                  src={logo}
                  priority
                  className="h-6 w-auto"
                />{" "}
                <p className="text-xl font-bold -ml-[2px]">anak Spices</p>
              </div>
            </Link>
            <Contact />
          </div>
        </div>
        <div className="flex-grow max-w-5xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
