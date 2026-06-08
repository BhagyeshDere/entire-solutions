"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader({ isExiting = false, onComplete }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) setTimeout(() => onComplete(), 500);
          return 100;
        }
        return Math.min(prev + 1.5, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#fbfbfc] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "opacity-0 scale-[1.02]" : "opacity-100"
      }`}
    >
      {/* BACKGROUND BRANDING */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="text-[15vw] font-black uppercase tracking-tighter text-neutral-900 select-none">
          Entire
        </div>
      </div>

      {/* CENTRAL LOGO CONTAINER (Set to Extra Large Scale) */}
      <div 
        className="relative z-10 w-full max-w-[700px] px-8 flex justify-center mb-20"
      >
        <div className="relative w-full aspect-[2/1] transition-transform duration-700 hover:scale-[1.02]">
          <Image 
            src="/logo.png" 
            alt="Entire Solutions Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* UNIQUE BOTTOM LINE COUNTER */}
      <div className="relative z-10 w-full max-w-[500px] px-8 flex flex-col items-center gap-3">
        <div className="w-full h-[1px] bg-neutral-200 relative">
          <div 
            className="absolute left-0 top-0 h-full bg-indigo-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-full font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          <span>Loading Infrastructure</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}