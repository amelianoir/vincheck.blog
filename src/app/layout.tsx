import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import MechanicChat from "@/components/MechanicChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free VIN Check & Vehicle History Report | VinCheck.blog",
  description: "Check any VIN number for free. Get vehicle history reports, accident data, theft records, and mileage rollbacks. Trusted by millions.",
  icons: {
    icon: '/favicon.ico', // standard Next.js favicon
  },
  openGraph: {
    title: "Free VIN Check & Vehicle History Report",
    description: "Reveal the hidden history of any car instantly.",
    url: 'https://vincheck.blog',
    siteName: 'VinCheck.blog',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Replace client ID with your own */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4945576098147797"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Google Analytics - Replace G-XXXXXXXXXX with your Measurement ID */}
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
        <CookieConsent />
        <MechanicChat />
      </body>
    </html>
  );
}
