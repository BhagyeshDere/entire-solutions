import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between py-24 md:py-32 bg-[#09090b] font-sans">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover filter brightness-[0.82]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Lightened Contrast Overlay - Reduced gradient alpha to reveal more background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/50"></div>

      {/* Main Structural Layout Container (Expanded to shift heading left & text right) */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-10 flex-1 flex flex-col justify-between gap-16">
        
        {/* Top / Left Section: Left-Shifted Expanded Heading */}
        <div className="w-full pt-16 md:pt-24 select-none">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-tighter text-white leading-[1.05] uppercase drop-shadow-md">
            Strong Builds
            <br />
            Start With{" "}
            {/* Added trailing right padding (pr-4) to prevent the gradient text mask from cropping the letter 's' */}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent pr-4">
              Sharp Cuts
            </span>
          </h1>
          {/* Refined Minimalist Indicator Line */}
          <div className="mt-8 w-16 h-[3px] bg-gradient-to-r from-purple-500 to-sky-400 rounded-full shadow-[0_2px_8px_rgba(147,51,234,0.3)]" />
        </div>

        {/* Bottom / Right Section: Deep Right-Corner Formatted Information Block */}
        <div className="self-end text-left md:text-right max-w-sm md:max-w-[400px] mb-6">
          <p className="text-sm md:text-base text-neutral-200 font-medium leading-relaxed tracking-wide drop-shadow-sm">
            Premium light and heavy engineering fabrication solutions 
            <span className="text-neutral-400 font-normal"> tailored comprehensively for high-performance industrial and commercial environments.</span>
          </p>
        </div>

      </div>

      {/* Elegant Scroll Down Indicator (Balanced dynamically below content) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center backdrop-blur-[2px] bg-black/10">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}