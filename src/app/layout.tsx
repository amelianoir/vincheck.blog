import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import MechanicChat from "@/components/MechanicChat";
import KonamiCode from "@/components/KonamiCode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vincheck.blog'),
  title: {
    default: "Free VIN Check & Vehicle History Report | VinCheck.blog",
    template: "%s | VinCheck.blog",
  },
  description: "Check any VIN number for free. Get vehicle history reports, accident data, theft records, and mileage rollbacks. Trusted by millions.",
  keywords: ["VIN check", "vehicle history", "car report", "VIN decoder", "accident history", "theft check"],
  authors: [{ name: "VinCheck.blog" }],
  creator: "VinCheck.blog",
  publisher: "VinCheck.blog",
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
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Free VIN Check & Vehicle History Report",
    description: "Reveal the hidden history of any car instantly.",
    url: 'https://vincheck.blog',
    siteName: 'VinCheck.blog',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vincheckblog',
  },
  // verification: { google: 'ADD_YOUR_GSC_CODE_HERE' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4945576098147797"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X118BW3G4H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X118BW3G4H');
          `}
        </Script>
        {/* JSON-LD Structured Data */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VinCheck.blog",
              "url": "https://vincheck.blog",
              "description": "Free VIN check and vehicle history reports",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://vincheck.blog/vin-check?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
        <CookieConsent />
        <MechanicChat />
        <KonamiCode />
      </body>
    </html>
  );
}
