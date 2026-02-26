'use client';
import { useState } from 'react';

const MECHANIC_AFFILIATE_URL =
  'https://afflat3e3.com/trk/lnk/F198E209-A1F3-45A5-B7C1-B5A7B02C8B25/?o=22649&c=158469&a=775698&k=81BBEA8199EE4BFCFC61E5450B17A56A9&l=23509';

export default function MechanicChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 bg-gray-900 border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🔧</div>
            <div>
              <p className="text-white font-bold text-sm">AutoMechanic AI</p>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-blue-100 text-xs">Online 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/60 hover:text-white text-xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4 space-y-3">
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center text-xs flex-shrink-0">🔧</div>
              <div className="bg-gray-800 rounded-2xl rounded-tl-none p-3 text-sm text-gray-200 max-w-[85%]">
                Hi! I&apos;m your 24/7 certified mechanic assistant. Ask me anything about your car! 🚗
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center text-xs flex-shrink-0">🔧</div>
              <div className="bg-gray-800 rounded-2xl rounded-tl-none p-3 text-sm text-gray-200 max-w-[85%]">
                Want a <strong>real-time answer</strong> from a verified ASE-certified mechanic?
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4">
            <a
              href={MECHANIC_AFFILIATE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center font-bold py-3 px-4 rounded-xl transition-all shadow-lg text-sm"
            >
              💬 Chat with a Mechanic Now →
            </a>
            <p className="text-xs text-gray-500 text-center mt-2">Response in under 5 minutes</p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform relative"
        aria-label="Chat with a mechanic"
      >
        {open ? '×' : '🔧'}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
        )}
      </button>
    </div>
  );
}
