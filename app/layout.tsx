import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import OneSignalInit from '@/components/OneSignalInit';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://graduateshub.co.za'),
  title: {
    default: 'Graduates Hub - Free Online Courses with Certificates',
    template: '%s | Graduates Hub',
  },
  description: 'Empowering learners worldwide to achieve their goals with completely free, high-quality online education across IT, Business, Languages, and more.',
  openGraph: {
    siteName: 'Graduates Hub',
    type: 'website',
    images: [{ url: '/graduates-hub-logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7185526762692935"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <CookieConsent />
        <ScrollToTop />
        <OneSignalInit />
        <SpeedInsights />
        <Analytics />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JF4KBF34HB" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JF4KBF34HB');
        `}</Script>
      </body>
    </html>
  );
}
