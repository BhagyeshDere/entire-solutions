"use client";

import { useEffect, useState } from "react";

// Added isExiting prop to handle the transition smoothly
export default function Loader({ isExiting = false, onComplete }) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Fine-tuned to 30ms for a slightly snappier, continuous countdown flow
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          if (onComplete) {
            setTimeout(() => onComplete(), 0);
          }
          return 100;
        }
        
        // Steady, liquid increments that update faster without giant structural jumps
        const dynamicIncrement = prev < 30 ? 2 : prev < 70 ? 1 : prev < 90 ? 2 : 1;
        const nextProgress = Math.min(prev + dynamicIncrement, 100);
        
        if (nextProgress === 100) {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(() => onComplete(), 0);
          }
        }
        
        return nextProgress;
      });
    }, 30); // 30ms strikes the perfect sweet spot between premium and fast

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 bg-[#fbfbfc] z-[99999] flex flex-col justify-between p-8 sm:p-12 md:p-16 select-none overflow-hidden font-sans transition-all duration-500 ease-in-out ${
        isExiting ? "opacity-0 scale-98 pointer-events-none" : "opacity-100"
      }`}
    >
      
      {/* ── BACKGROUND ACCENTS ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(162,58,236,0.03)_0%,rgba(99,102,241,0.02)_50%,transparent_70%)] animate-[pulse_6s_infinite_ease-in-out]" />
        
        <div className="text-[16vw] font-black tracking-tighter text-[#6366f1]/[0.012] uppercase text-center leading-none whitespace-nowrap select-none">
          Entire Solutions
        </div>
      </div>

      <div className="h-0 w-full pointer-events-none select-none" />

      {/* ── PERFECTLY CENTRALIZED BIG BRAND HEADING WITH INBOUND REVEAL ── */}
      <div className="relative z-10 my-auto self-center text-center w-full max-w-4xl px-4 flex flex-col items-center justify-center">
        
        {/* Row 1 Wrapper: Masks bounds for clean sliding movement */}
        <div className="overflow-hidden py-2 w-full flex justify-center">
          <h1 
            style={{ 
              transform: isExiting ? "translateY(-15px)" : undefined,
              animationName: isExiting ? "none" : "revealUp",
              animationDuration: "1.2s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationFillMode: "both"
            }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-black tracking-tight uppercase text-neutral-900 leading-[0.9] transition-transform duration-700 ease-out"
          >
            Entire
          </h1>
        </div>

        {/* Row 2 Wrapper: Masks bounds for clean sliding movement */}
        <div className="overflow-hidden py-2 w-full flex justify-center">
          <h2 
            style={{ 
              transform: isExiting ? "translateY(15px)" : undefined,
              animationName: isExiting ? "none" : "revealUp",
              animationDuration: "1.2s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.15s",
              animationFillMode: "both"
            }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-black tracking-tight uppercase leading-[0.9] bg-gradient-to-r from-[#a23aec] via-[#6366f1] to-[#25b3fa] bg-clip-text text-transparent transition-transform duration-700 ease-out"
          >
            Solutions
          </h2>
        </div>
        
      </div>

      {/* ── BOTTOM CORNER TIMER SEGMENT ─────────────────────────────── */}
      <div className="relative z-10 w-full flex justify-end items-end pt-4 border-t border-neutral-200/30">
        <div className="tabular-nums leading-none mb-[-12px] sm:mb-[-24px] md:mb-[-32px]">
          <span 
            style={{ 
              transform: isExiting ? "scale(0.95) translateY(10px)" : "scale(1) translateY(0px)",
              filter: isExiting ? "blur(4px)" : "blur(0px)"
            }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[150px] font-black bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-700 bg-clip-text text-transparent flex items-start transition-all duration-500 ease-in-out"
          >
            {progress}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-indigo-500 ml-1 mt-2 sm:mt-4 md:mt-6">
              %
            </span>
          </span>
        </div>
      </div>

      {/* Embedded High-Fidelity Entrance Animation Keyframes */}
      <style jsx global>{`
        @keyframes revealUp {
          from {
            transform: translateY(115%);
            filter: blur(5px);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            filter: blur(0px);
            opacity: 1;
          }
        }
      `}</style>

    </div>
  );
}