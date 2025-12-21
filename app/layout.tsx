import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "آکادمی علی قاسمیان",
    template: "%s | علی قاسمیان",
  },
  description: "آکادمی علی قاسمیان - ارائه خدمات آموزشی و تخصصی با کیفیت. دوره‌های آموزشی، مشاوره کسب‌وکار، طراحی وبسایت و بازاریابی دیجیتال",
  keywords: ["آکادمی", "استودیو", "آموزش", "دوره آموزشی", "مشاوره کسب‌وکار", "علی قاسمیان", "قم"],
  authors: [{ name: "علی قاسمیان" }],
  creator: "علی قاسمیان",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: '/',
    siteName: 'آکادمی علی قاسمیان',
    title: 'آکادمی علی قاسمیان',
    description: 'آکادمی علی قاسمیان - ارائه خدمات آموزشی و تخصصی با کیفیت',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'آکادمی علی قاسمیان',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آکادمی علی قاسمیان',
    description: 'آکادمی علی قاسمیان - ارائه خدمات آموزشی و تخصصی با کیفیت',
    images: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

