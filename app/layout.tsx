import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

// Defer non-critical client layout components out of initial hydration bundle
const CookieConsent = dynamic(() => import('@/components/layout/CookieConsent'));
const InstallPrompt = dynamic(() => import('@/components/layout/InstallPrompt'));
const OneSignalInit = dynamic(() => import('@/components/layout/OneSignalInit'));
const ProofAutoSync = dynamic(() => import('@/components/layout/ProofAutoSync'));

export const metadata: Metadata = {
  metadataBase: new URL('https://www.graduateshub.org'),
  title: {
    default: 'Graduates Hub - Free Career Roadmaps, Interview Prep & AI Tools',
    template: '%s | Graduates Hub',
  },
  description:
    'Graduates Hub is South Africa\'s leading graduate career resource platform. Explore step-by-step career roadmaps, role-specific interview prep guides, proof of work portfolio tasks, certified course guides, and AI career tools.',
  openGraph: {
    siteName: 'Graduates Hub',
    type: 'website',
    images: [{ url: '/graduates-hub-logo.png', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  twitter: {
    card: 'summary_large_image',
  },
  appleWebApp: {
    capable: true,
    title: 'Graduates Hub',
    statusBarStyle: 'default',
  },
  icons: {
    icon: '/logo-512x512.png',
    apple: '/logo-512x512.png',
  },
  other: {
    'google-adsense-account': 'ca-pub-7185526762692935',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NCVJM37D';

  return (
    <html lang="en">
      <head>
        {/* Preconnect & DNS prefetch hints for critical third-party domains */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* AdSense script for site verification & ad delivery */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7185526762692935"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}</Script>
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <CookieConsent />
        <InstallPrompt />
        <ScrollToTop />
        <OneSignalInit />
        <ProofAutoSync />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
