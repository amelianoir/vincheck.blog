"use client";
import { useEffect } from "react";

interface AdSenseBlockProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdSenseBlock({ 
  slot, 
  format = "auto", 
  responsive = true,
  style = { display: "block" }
}: AdSenseBlockProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-4945576098147797"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    ></ins>
  );
}
