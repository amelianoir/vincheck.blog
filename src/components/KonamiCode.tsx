'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function KonamiCode() {
  const router = useRouter();
  const [keys, setKeys] = useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10);
        
        // Check if konami code is entered
        if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
          // Show easter egg message
          const message = document.createElement('div');
          message.innerHTML = `
            <div style="
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 2rem;
              border-radius: 1rem;
              box-shadow: 0 20px 60px rgba(0,0,0,0.5);
              z-index: 9999;
              text-align: center;
              animation: konamiPulse 0.5s ease-in-out;
            ">
              <div style="font-size: 3rem; margin-bottom: 1rem;">🎮✨</div>
              <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">Konami Code Activated!</h2>
              <p style="opacity: 0.9;">Redirecting to secret garage in 3 seconds...</p>
            </div>
            <style>
              @keyframes konamiPulse {
                0%, 100% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.1); }
              }
            </style>
          `;
          document.body.appendChild(message);
          
          // Redirect after 3 seconds
          setTimeout(() => {
            router.push('/secret-garage');
          }, 3000);
          
          // Clear keys
          return [];
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return null;
}
