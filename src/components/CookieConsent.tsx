"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_consent");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-800 p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
      <div className="text-sm text-gray-300 max-w-4xl text-center md:text-left">
        We use cookies to improve your experience and analyze site traffic. By continuing to use our site, you agree to our use of cookies.
      </div>
      <button
        onClick={accept}
        className="whitespace-nowrap bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition-all text-sm shadow-lg shadow-blue-900/20"
      >
        Accept All
      </button>
    </div>
  );
}
