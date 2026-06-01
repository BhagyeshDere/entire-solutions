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
      <div className="max-w-[89rem] mx-auto px-6 lg:px-4 xl:px-6 relative">

        {/* Desktop Navbar - Flex wrapper configuration to allow true viewport absolute centering for the logo */}
        <div className="hidden lg:flex items-center justify-between h-20 relative w-full">

          {/* Left Block - Bundles the custom hamburger element and the left menu navigation seamlessly */}
          <div className="flex items-center gap-8 xl:gap-12 z-10">
            {/* Main Screen Desktop Hamburger Menu Button - Upgraded size and footprint based on image_0c2c69.png */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all duration-300 focus:outline-none flex-shrink-0 ${
                scrolled 
                  ? "border-neutral-400 text-neutral-800 hover:bg-neutral-900/5" 
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {/* SVG dimension increased from w-4 h-4 to w-5 h-5 with crisp stroke profile */}
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

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
          </div>

          {/* Center Logo - Mathematically centered using absolute positioning to avoid any asymmetric push */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-auto">
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

          {/* Right Block - Houses the right aligned link text nodes cleanly */}
          <div className="flex items-center justify-end z-10">
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

        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center justify-between h-20 relative">

          <a href="/" className="z-10">
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

          {/* Mobile Hamburger Button Toggle Container - Parity scaled with desktop button enhancement */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all duration-300 focus:outline-none z-10 ${
              scrolled 
                ? "border-neutral-400 text-neutral-800 hover:bg-neutral-900/5" 
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>

        {/* Premium Full-Height Left Side Drawer Overlay Panel - Styled precisely to match image_0c24ed.jpg */}
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex">
            
            {/* Dark Matte Background Backdrop Scrim */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />

            {/* Pure White Left Side Drawer Frame Panel */}
            <div className="relative w-[82vw] sm:w-[390px] h-screen bg-white shadow-[15px_0_50px_rgba(0,0,0,0.15)] flex flex-col justify-between p-8 sm:p-10 border-r border-neutral-200/80 transition-transform duration-300 ease-out z-10">
              
              <div>
                {/* Floating Micro-Circular Close Node Intersecting the Panel Boundary Line Perfectly */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 bg-white text-neutral-800 rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-105 transition-all focus:outline-none z-20"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left Side Menu Top Branding Segment */}
                <div className="mb-14 pt-4">
                  <Image
                    src="/logo.png"
                    alt="Entire Solutions"
                    width={110}
                    height={38}
                    className="brightness-100 contrast-100 object-contain"
                  />
                </div>

                {/* Clean, Minimalist List Layout Column Stack */}
                <div className="flex flex-col">
                  {[...leftLinks, ...rightLinks].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="group font-medium text-neutral-800 hover:text-neutral-900 py-4 border-b border-neutral-100 text-2xl tracking-normal flex justify-between items-center transition-colors"
                    >
                      <span>{item}</span>
                      {/* Subtle arrow disclosure indicator */}
                      <svg className="w-4 h-4 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 transition-all fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Utility Branding Drawer Footer */}
              <div className="pt-6 border-t border-neutral-100 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                Entire Solutions © All Rights Reserved
              </div>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}