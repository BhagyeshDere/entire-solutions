import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between py-24 md:py-32">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/65"></div>

      {/* Main Structural Layout Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex-1 flex flex-col justify-between gap-12">
        
        {/* Top / Left Section: Simple 2-Line Heading (Size Reduced) */}
        <div className="max-w-4xl pt-12 md:pt-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] uppercase drop-shadow-sm">
            Strong Builds Start
            <br />
            With{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              Sharp Cuts
            </span>
          </h1>
          {/* Re-styled Minimalist Indicator Line */}
          <div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-purple-500 to-sky-400 rounded-full" />
        </div>

        {/* Bottom / Right Section: Simple Minimal 3-Line Information Block (No Outer Box) */}
        <div className="self-end text-left md:text-right max-w-sm md:max-w-md mb-8">
          <p className="text-sm md:text-base text-neutral-200 font-medium leading-relaxed tracking-wide">
            Premium light and heavy engineering fabrication solutions{" "}
            <span className="block md:mt-1.5 text-neutral-400 font-normal">tailored comprehensively for high-performance</span>{" "}
            <span className="block md:mt-1.5 text-neutral-400 font-normal">industrial and commercial environments.</span>
          </p>
        </div>

      </div>

      {/* Elegant Scroll Down Indicator (Balanced dynamically below content) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center backdrop-blur-[2px]">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}