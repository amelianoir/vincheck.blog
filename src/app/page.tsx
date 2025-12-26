import VinInput from "@/components/VinInput";
import AdSenseBlock from "@/components/AdSenseBlock";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free VIN Check & Vehicle History Report | VinCheck.blog",
  description: "Check any VIN number for free. Get instant vehicle history reports with accident data, theft records, mileage rollbacks, and title brands. Trusted by millions of car buyers worldwide.",
  keywords: "VIN check, vehicle history report, car history, VIN decoder, free VIN check, accident history, theft check, mileage rollback, title check",
  openGraph: {
    title: "Free VIN Check & Vehicle History Report",
    description: "Reveal the hidden history of any car instantly. Check for accidents, theft, and more.",
    url: "https://vincheck.blog",
    siteName: "VinCheck.blog",
    type: "website",
    images: [
      {
        url: "https://vincheck.blog/og-image.png",
        width: 1200,
        height: 630,
        alt: "VinCheck.blog - Free Vehicle History Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free VIN Check & Vehicle History Report",
    description: "Check any VIN for accidents, theft records, and mileage rollbacks.",
  },
  alternates: {
    canonical: "https://vincheck.blog",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          VINCheck<span className="text-blue-500">.blog</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <a href="https://epicvin.com?a_aid=0xhataau2iwvr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Get Report</a>
          <Link href="/vin-check/bmw" className="hover:text-white transition">By Brand</Link>
          <Link href="/global/germany" className="hover:text-white transition">By Country</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow w-full max-w-7xl px-6 flex flex-col items-center justify-center text-center py-20">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
          Trusted by 1M+ Users Globally
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          Reveal the Hidden Truth <br className="hidden md:block" /> of Any Vehicle.
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10">
          Instant Vehicle History Reports. Check for accidents, theft, mileage rollbacks, and more before you buy.
        </p>

        <VinInput />

        {/* Affiliate Banner */}
        <div className="mt-12 w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-800 hover:border-blue-500/50 transition-all">
          <a href="https://epicvin.com?a_aid=0xhataau2iwvr&a_bid=0uu6apqs" target="_blank" rel="noopener noreferrer">
             {/* Using standard img for external resource without configuring next.config.ts yet */}
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="https://img123.s3.amazonaws.com/affiliate-banners/5/970x250-6.png" 
               alt="Check VIN History Report" 
               className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" 
             />
          </a>
          {/* Tracking pixel */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://affiliate.epicvin.com/scripts/014iuuh?a_aid=0xhataau2iwvr&a_bid=0uu6apqs" width="1" height="1" alt="" className="hidden" />
        </div>

        {/* AdSense Block 1 - After VIN Input */}
        <div className="mt-12 w-full max-w-4xl">
          <AdSenseBlock slot="1234567890" />
        </div>


        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-red-500/50 transition-colors">
                <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-4 text-red-500">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hidden Damage</h3>
                <p className="text-sm text-gray-400">Discover accidents that sellers try to hide. See photos of past damage.</p>
            </div>
            
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mileage Rollback</h3>
                <p className="text-sm text-gray-400">Check if the odometer has been tampered with. Save thousands on value.</p>
            </div>

            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-yellow-500/50 transition-colors">
                <div className="w-12 h-12 bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Stolen Check</h3>
                <p className="text-sm text-gray-400">Avoid buying a stolen vehicle. Check police databases worldwide.</p>
            </div>
        </div>

        {/* VinAlert Banner */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">🚨 Premium VIN Alert Service</h3>
                <p className="text-gray-300 mb-4">
                  Get instant alerts on vehicle history, including accidents, theft, recalls, and more. Trusted by thousands of car buyers worldwide.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 mb-4">
                  <li>✅ Unlimited VIN checks</li>
                  <li>✅ Real-time theft alerts</li>
                  <li>✅ Accident & damage reports</li>
                  <li>✅ Recall notifications</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="https://bfa312tbm8pmcn7b1zu6vm7sih.hop.clickbank.net" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg text-center"
                >
                  Try VinAlert Now →
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 w-full max-w-4xl text-left">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <div className="p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white mb-2">Is the VIN Check free?</h4>
                    <p className="text-gray-400 text-sm">We provide a free initial VIN decode to verify the vehicle&apos;s make, model, and year. The full history report with accident data is a paid service from our trusted partners.</p>
                </div>
                <div className="p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white mb-2">Where can I find my VIN?</h4>
                    <p className="text-gray-400 text-sm">The VIN is typically found on the driver&apos;s side dashboard (visible through the windshield) or on the driver&apos;s side door jamb.</p>
                </div>
                <div className="p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white mb-2">Does this work for European cars?</h4>
                    <p className="text-gray-400 text-sm">Yes! We support VINs from all major manufacturers including BMW, Audi, Mercedes, VW, and many more across Europe and the UK.</p>
                </div>
            </div>
        </div>

        {/* AdSense Block 2 - After FAQ */}
        <div className="mt-16 w-full max-w-4xl">
          <AdSenseBlock slot="0987654321" />
        </div>


        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for car logos - Text for now as we don't have images */}
          <div className="flex items-center justify-center font-bold text-xl text-gray-500">BMW</div>
          <div className="flex items-center justify-center font-bold text-xl text-gray-500">FORD</div>
          <div className="flex items-center justify-center font-bold text-xl text-gray-500">TOYOTA</div>
          <div className="flex items-center justify-center font-bold text-xl text-gray-500">AUDI</div>
        </div>
      </main>

      {/* AdSense Block 3 - Before Footer */}
      <div className="w-full max-w-4xl px-6 mb-12">
        <AdSenseBlock slot="1122334455" />
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="w-full bg-black border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
                <h4 className="text-white font-bold mb-4">Global VIN Checks</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><Link href="/global/germany" className="hover:text-blue-400">VIN Check Germany</Link></li>
                    <li><Link href="/global/uk" className="hover:text-blue-400">VIN Check UK</Link></li>
                    <li><Link href="/global/australia" className="hover:text-blue-400">VIN Check Australia</Link></li>
                    <li><Link href="/global/canada" className="hover:text-blue-400">VIN Check Canada</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">European Region</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><Link href="/global/denmark" className="hover:text-blue-400">VIN Check Denmark</Link></li>
                    <li><Link href="/global/norway" className="hover:text-blue-400">VIN Check Norway</Link></li>
                    <li><Link href="/global/france" className="hover:text-blue-400">VIN Check France</Link></li>
                    <li><Link href="/global/new-zealand" className="hover:text-blue-400">VIN Check New Zealand</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="text-white font-bold mb-4">Brands</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><Link href="/vin-check/bmw" className="hover:text-blue-400">BMW VIN Decoder</Link></li>
                    <li><Link href="/vin-check/mercedes-benz" className="hover:text-blue-400">Mercedes VIN Decoder</Link></li>
                    <li><Link href="/vin-check/toyota" className="hover:text-blue-400">Toyota VIN Decoder</Link></li>
                </ul>
            </div>
            <div>
                 <h4 className="text-white font-bold mb-4">Resources</h4>
                 <ul className="space-y-2 text-sm text-gray-500">
                    <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
                    <li><a href="https://epicvin.com?a_aid=0xhataau2iwvr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Full VIN Report</a></li>
                 </ul>
            </div>
        </div>
        <div className="text-center text-gray-600 text-sm">
             &copy; {new Date().getFullYear()} Vincheck.blog. All rights reserved.
        </div>
        <div className="text-center text-gray-800 text-xs mt-2 hover:text-orange-500 transition-colors cursor-help" title="Try entering EASTEREGG1234567X in the VIN checker!">
             🥚 Psst... Easter eggs hidden here 🔍
        </div>
      </footer>
    </div>
  );
}
