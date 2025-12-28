import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FontPreload from "@/components/FontPreload";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "آکادمی 84",
    template: "%s | آکادمی 84",
  },
  description: "آکادمی 84 - مرکز تخصصی آموزش تصویر و رسانه. دوره‌های حرفه‌ای و پروژه‌محور، مشاوره کسب‌وکار، طراحی وبسایت و بازاریابی دیجیتال. مسیر حرفه‌ای‌شدنت از همین امروز شروع می‌شود.",
  keywords: ["آکادمی 84", "هشتاد و چهار", "آموزش", "دوره آموزشی", "مشاوره کسب‌وکار", "قم"],
  authors: [{ name: "آکادمی 84" }],
  creator: "آکادمی 84",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.academy84.ir'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://www.academy84.ir',
    siteName: 'آکادمی 84',
    title: 'آکادمی 84 | مرکز تخصصی آموزش تصویر و رسانه',
    description: 'آکادمی 84 - مرکز تخصصی آموزش تصویر و رسانه. دوره‌های حرفه‌ای، پروژه‌محور و کاربردی برای تبدیل شدن به یک حرفه‌ای',
    images: [
      {
        url: 'https://www.academy84.ir/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'لوگو و تصویر شاخص آکادمی 84 - مرکز تخصصی آموزش تصویر و رسانه',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آکادمی 84 | مرکز تخصصی آموزش تصویر و رسانه',
    description: 'آکادمی 84 - مرکز تخصصی آموزش تصویر و رسانه. دوره‌های حرفه‌ای، پروژه‌محور و کاربردی',
    images: ['https://www.academy84.ir/images/og-image.svg'],
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
        <StructuredData />
        <FontPreload />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

