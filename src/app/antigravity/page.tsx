import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antigravity | VinCheck.blog",
  description: "You've discovered the antigravity Easter egg!",
};

export default function AntigravityPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-float-slower"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] animate-float-fast"></div>
      </div>

      {/* Floating content */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8 animate-float">
        <div className="inline-block">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-purple-400 animate-pulse-slow">
            🚗✨ Antigravity
          </h1>
        </div>

        <div className="space-y-4 text-gray-300">
          <p className="text-xl md:text-2xl leading-relaxed">
            Congratulations! You&apos;ve discovered the secret antigravity mode.
          </p>
          <p className="text-lg text-gray-400">
            Just like the famous{" "}
            <a 
              href="https://xkcd.com/353/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              XKCD #353
            </a>
            {" "}comic about Python&apos;s antigravity module...
          </p>
        </div>

        {/* Floating VIN card */}
        <div className="relative">
          <div className="inline-block bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl animate-float-gentle transform hover:scale-105 transition-transform">
            <div className="space-y-4">
              <div className="text-sm text-purple-400 font-mono">ANTIGRAVITY_VIN_CHECK</div>
              <code className="block text-2xl font-bold text-white font-mono">
                1HGBH41JXMN109186
              </code>
              <div className="text-sm text-gray-400">
                Status: <span className="text-green-400">Floating in Zero Gravity ✓</span>
              </div>
            </div>
          </div>
          {/* Sparkles */}
          <span className="absolute -top-4 -right-4 text-4xl animate-spin-slow">✨</span>
          <span className="absolute -bottom-4 -left-4 text-4xl animate-spin-slower">⭐</span>
        </div>

        {/* Fun facts */}
        <div className="max-w-xl mx-auto p-6 bg-gray-900/40 border border-gray-800 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-3">Fun Fact</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            In antigravity mode, vehicles don&apos;t need VIN checks because they never touch the ground.
            No accidents, no wear and tear, just pure floating bliss. 🎈
          </p>
        </div>

        {/* Back button */}
        <div className="pt-8">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-purple-500/50"
          >
            Return to Earth 🌍
          </Link>
        </div>

        {/* Easter egg hint */}
        <div className="pt-8">
          <p className="text-xs text-gray-600">
            Pro tip: Try typing &quot;antigravity&quot; in the VIN input... just kidding! Or am I? 🤔
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 text-2xl animate-float-slow opacity-30">🚙</div>
        <div className="absolute top-40 right-20 text-3xl animate-float-slower opacity-20">🚗</div>
        <div className="absolute bottom-32 left-1/4 text-2xl animate-float-fast opacity-25">🏎️</div>
        <div className="absolute bottom-20 right-1/3 text-3xl animate-float-gentle opacity-30">🚕</div>
        <div className="absolute top-1/2 left-1/3 text-xl animate-float-slow opacity-20">⭐</div>
        <div className="absolute top-1/3 right-1/4 text-xl animate-float-slower opacity-25">✨</div>
      </div>
    </div>
  );
}
