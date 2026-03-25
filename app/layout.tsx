import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import OneSignalInit from '@/components/OneSignalInit';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      </body>
    </html>
  );
}
