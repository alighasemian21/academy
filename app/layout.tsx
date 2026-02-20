import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalyticsComponent from "@/components/GoogleAnalytics";
import Providers from "@/components/Providers";

const iranYekan = localFont({
  src: [
    { path: "../public/fonts/iran-yekan-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/iran-yekan-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/iran-yekan-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "آکادمی 84",
    template: "%s | آکادمی 84",
  },
  description: "آکادمی 84 (آموزشگاه هشتاد و چهار) - مرکز تخصصی آموزش تصویر و رسانه در کاشان. دوره‌های حرفه‌ای و پروژه‌محور تولید محتوا، عکاسی، موبایگرافی، تدوین، طراحی وبسایت، مشاوره کسب‌وکار و بازاریابی دیجیتال. مسیر حرفه‌ای‌شدنت از همین امروز شروع می‌شود.",
  keywords: ["آکادمی 84", "آموزشگاه 84", "هشتاد و چهار", "آموزشگاه هشتاد و چهار", "آموزشگاه در کاشان", "آکادمی در کاشان", "آموزش تولید محتوا کاشان", "آموزش عکاسی کاشان", "آموزش موبایگرافی کاشان", "آموزش طراحی وبسایت کاشان", "آموزش تدوین فیلم کاشان", "مشاوره کسب‌وکار کاشان", "دوره آموزشی کاشان", "آموزشگاه", "کاشان"],
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
    title: 'آکادمی 84 | آموزشگاه تخصصی تصویر و رسانه در کاشان',
    description: 'آکادمی 84 (آموزشگاه هشتاد و چهار) - مرکز تخصصی آموزش تصویر و رسانه در کاشان. دوره‌های حرفه‌ای تولید محتوا، عکاسی، موبایگرافی، تدوین، طراحی وبسایت و مشاوره کسب‌وکار',
    images: [
      {
        url: 'https://www.academy84.ir/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'آکادمی 84 - آموزشگاه تخصصی تصویر و رسانه در کاشان',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آکادمی 84 | آموزشگاه تخصصی تصویر و رسانه در کاشان',
    description: 'آکادمی 84 (آموزشگاه هشتاد و چهار) - مرکز تخصصی آموزش تصویر و رسانه در کاشان. دوره‌های حرفه‌ای تولید محتوا، عکاسی، موبایگرافی و طراحی وبسایت',
    images: ['https://www.academy84.ir/images/og-image.png'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' }],
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
    <html lang="fa" dir="rtl" className={iranYekan.variable}>
      <head>
        <meta name="theme-color" content="#171717" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-sans">
        <StructuredData />
        <GoogleAnalyticsComponent />
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

