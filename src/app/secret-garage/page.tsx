import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secret Garage 🏎️ | VinCheck.blog",
  description: "Welcome to the secret garage! You found the hidden cars collection.",
};

const secretCars = [
  { name: "DeLorean DMC-12", vin: "BACK2THEFUTURE88", year: "1985", emoji: "⚡", fact: "Time machine capable of 88 MPH" },
  { name: "Batmobile", vin: "DARKKNIGHT1939XXX", year: "1939", emoji: "🦇", fact: "Crime-fighting vehicle with rocket boosters" },
  { name: "KITT", vin: "KNIGHTRIDER1982XX", year: "1982", emoji: "🤖", fact: "AI-powered Pontiac Trans Am" },
  { name: "Herbie", vin: "LOVEBUG1963XXXXX", year: "1963", emoji: "❤️", fact: "The Love Bug with a mind of its own" },
  { name: "Lightning McQueen", vin: "KACHOW95XXXXXXXX", year: "2006", emoji: "⚡", fact: "Speed. I am speed." },
  { name: "Mystery Machine", vin: "SCOOBYDOO1969XXX", year: "1969", emoji: "🐕", fact: "Zoinks! Solves mysteries since 1969" },
];

export default function SecretGaragePage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto p-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-orange-400 transition">
          VINCheck<span className="text-orange-500">.blog</span>
        </Link>
      </header>

      <main className="flex-grow w-full max-w-6xl px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16 animate-float">
          <div className="inline-block mb-4">
            <span className="text-6xl">🏎️🔐</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
            Secret Garage
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Congratulations, detective! 🕵️ You&apos;ve unlocked the secret garage containing the most legendary vehicles in pop culture history.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {secretCars.map((car, index) => (
            <div 
              key={car.vin}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all hover:scale-105 transform hover:shadow-xl hover:shadow-orange-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <span className="text-5xl animate-float-gentle">{car.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Year:</span>
                  <span className="text-orange-400 font-mono">{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">VIN:</span>
                  <span className="text-orange-400 font-mono text-xs">{car.vin}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-950/50 rounded-lg border border-gray-800">
                <p className="text-xs text-gray-400 italic">&quot;{car.fact}&quot;</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secret hints */}
        <div className="max-w-3xl mx-auto p-8 bg-gray-900/50 border border-orange-500/30 rounded-2xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">🔓 How to Find Secret Pages</h2>
          <div className="space-y-3 text-gray-400">
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">1.</span>
              <span>Try entering special VINs in the homepage checker (hint: movie references!)</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">2.</span>
              <span>Look for hidden links in blog posts and page footers</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">3.</span>
              <span>Try typing &quot;konami&quot; on your keyboard anywhere on the site... 🎮</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">4.</span>
              <span>Visit <code className="px-2 py-1 bg-gray-800 rounded text-orange-400">/antigravity</code> for a floating surprise!</span>
            </p>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-orange-500/50"
          >
            🏠 Exit Garage
          </Link>
        </div>

        {/* Easter egg counter */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            Easter eggs found: 2 / 5 🥚✨
          </p>
        </div>
      </main>

      <footer className="w-full p-6 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>Secret Garage © {new Date().getFullYear()} - For the curious minds 🔍</p>
      </footer>
    </div>
  );
}
