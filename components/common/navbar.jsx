"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const leftLinks = ["Home", "About", "Services"];
  const rightLinks = ["Products", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#e5e5e5]/90 backdrop-blur-md shadow-sm border-b border-neutral-300 mt-0"
          : "bg-transparent border-b border-transparent mt-4"
      }`}
    >
      {/* Maximum boundary frame scaled to 89rem with tightened padding to pull content out towards corners */}
      <div className="max-w-[89rem] mx-auto px-6 lg:px-4 xl:px-6">

        {/* Desktop Navbar */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-20">

          {/* Left Menu - Anchored toward left side edge layout with slightly narrowed corner gap */}
          <nav className="flex justify-start gap-12 xl:gap-14">
            {leftLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-1 group ${
                  scrolled
                    ? "text-neutral-800 hover:text-neutral-900"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item}
                {/* Micro-animated modern underline link indicator */}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-neutral-900" : "bg-white"
                }`} />
              </a>
            ))}
          </nav>

          {/* Center Logo - Standard Symmetric Safety Gap Margins */}
          <div className="flex justify-center px-12 xl:px-24">
            <a href="/">
              <Image
                src="/logo.png"
                alt="Entire Solutions"
                width={120}
                height={40}
                priority
                className={`object-contain transition duration-500 hover:scale-105 ${
                  scrolled 
                    ? "brightness-100 contrast-100" // Vivid original brand colors over the gray/white container
                    : "brightness-0 invert"          // Crisp, clean minimal white variant over a transparent hero banner
                }`}
              />
            </a>
          </div>

          {/* Right Menu - Anchored toward right side edge layout with slightly narrowed corner gap */}
          <nav className="flex justify-end gap-12 xl:gap-14">
            {rightLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-1 group ${
                  scrolled
                    ? "text-neutral-800 hover:text-neutral-900"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-neutral-900" : "bg-white"
                }`} />
              </a>
            ))}
          </nav>

        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between h-20">

          <a href="/">
            <Image
              src="/logo.png"
              alt="Entire Solutions"
              width={110}
              height={38}
              priority
              className={`object-contain transition-all duration-300 ${
                scrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border text-xl transition-all duration-300 focus:outline-none ${
              scrolled 
                ? "border-neutral-400 text-neutral-800 hover:bg-neutral-900/5" 
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#e5e5e5]/95 backdrop-blur-xl rounded-2xl shadow-xl border border-neutral-300/60 mb-4 p-6 animate-in fade-in slide-in-from-top-4 duration-300">

            <div className="flex flex-col gap-4">

              {[...leftLinks, ...rightLinks].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-neutral-800 hover:text-neutral-900 border-b border-neutral-300/40 pb-2 text-sm uppercase tracking-wide flex justify-between items-center"
                >
                  <span>{item}</span>
                  <span className="text-xs text-neutral-400">➔</span>
                </a>
              ))}

            </div>

          </div>
        )}

      </div>
    </header>
  );
}