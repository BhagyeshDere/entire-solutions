"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // UPDATED: Removed "/about" so it now defaults to light text
  const darkTextPages = ["/contact"];
  const isDarkPage = darkTextPages.includes(pathname);

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
  ];

  const rightLinks = [
    { name: "Products", href: "/#products" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTextColor = () => {
    if (scrolled) return "text-neutral-800 hover:text-neutral-900";
    return isDarkPage ? "text-neutral-800 hover:text-neutral-900" : "text-white hover:text-white/80";
  };

  const getBorderColor = () => {
    if (scrolled) return "border-neutral-400 text-neutral-800 hover:bg-neutral-900/5";
    return isDarkPage ? "border-neutral-800 text-neutral-800 hover:bg-neutral-900/5" : "border-white/30 text-white hover:bg-white/10";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#e5e5e5]/90 backdrop-blur-md shadow-sm border-b border-neutral-300 mt-0"
          : "bg-transparent border-b border-transparent mt-4"
      }`}
    >
      <div className="max-w-[89rem] mx-auto px-6 lg:px-4 xl:px-6 relative">
        <div className="hidden lg:flex items-center justify-between h-20 relative w-full">
          
          <div className="flex items-center gap-8 xl:gap-12 z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all duration-300 focus:outline-none flex-shrink-0 ${getBorderColor()}`}
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <nav className="flex justify-start gap-12 xl:gap-14">
              {leftLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-1 group ${getTextColor()}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    scrolled || isDarkPage ? "bg-neutral-900" : "bg-white"
                  }`} />
                </Link>
              ))}
            </nav>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-auto">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Entire Solutions"
                width={120}
                height={40}
                priority
                className={`object-contain transition duration-500 hover:scale-105 ${
                  scrolled || isDarkPage ? "brightness-100 contrast-100" : "brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          <div className="flex items-center justify-end z-10">
            <nav className="flex justify-end gap-12 xl:gap-14">
              {rightLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-1 group ${getTextColor()}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    scrolled || isDarkPage ? "bg-neutral-900" : "bg-white"
                  }`} />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navbar remains responsive */}
        <div className="lg:hidden flex items-center justify-between h-20 relative">
          <Link href="/" className="z-10">
            <Image
              src="/logo.png"
              alt="Entire Solutions"
              width={110}
              height={38}
              priority
              className={`object-contain transition-all duration-300 ${
                scrolled || isDarkPage ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all duration-300 focus:outline-none z-10 ${getBorderColor()}`}
          >
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={() => setIsOpen(false)} />
            <div className="relative w-[82vw] sm:w-[390px] h-screen bg-white shadow-[15px_0_50px_rgba(0,0,0,0.15)] flex flex-col justify-between p-8 sm:p-10 border-r border-neutral-200/80 transition-transform duration-300 ease-out z-10">
              {/* ... Drawer content remains unchanged ... */}
              <div>
                <button onClick={() => setIsOpen(false)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-11 h-11 bg-white text-neutral-800 rounded-full flex items-center justify-center border border-neutral-200 shadow-md hover:scale-105 transition-all focus:outline-none z-20">
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="mb-14 pt-4">
                  <Image src="/logo.png" alt="Entire Solutions" width={110} height={38} className="brightness-100 contrast-100 object-contain" />
                </div>
                <div className="flex flex-col">
                  {[...leftLinks, ...rightLinks].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group font-medium text-neutral-800 hover:text-neutral-900 py-4 border-b border-neutral-100 text-2xl tracking-normal flex justify-between items-center transition-colors"
                    >
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
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