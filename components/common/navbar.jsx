"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200">
      <div className="max-w-[89rem] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: Logo Container (Size Increased) */}
        <Link href="/" className="z-10 flex-shrink-0 w-40 md:w-48">
          <Image
            src="/logo.png"
            alt="Entire Solutions"
            width={180}
            height={60}
            priority
            className="object-contain w-full h-auto"
          />
        </Link>

        {/* CENTER: Perfectly Centered Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-bold text-[13px] uppercase tracking-[0.1em] text-neutral-900 hover:text-fuchsia-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Fixed width and adjusted padding for button text visibility */}
        <div className="hidden lg:flex items-center gap-3 min-w-[200px] justify-end">
          <Link
            href="/brochure.pdf"
            download
            target="_blank"
            className="px-4 py-2 rounded-full border-2 border-fuchsia-600 text-fuchsia-700 text-[11px] font-bold hover:bg-fuchsia-600 hover:text-white transition-all uppercase tracking-wider whitespace-nowrap"
          >
            Brochure
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-neutral-900 text-white text-[11px] font-bold hover:bg-fuchsia-700 transition-all shadow-md uppercase tracking-wider whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-900"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white flex flex-col p-8">
          <button onClick={() => setIsOpen(false)} className="self-end p-2 text-neutral-900">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="flex flex-col gap-8 mt-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-neutral-900 border-b border-neutral-100 pb-4"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/brochure.pdf" download className="w-full text-center py-4 rounded-xl border-2 border-fuchsia-600 text-fuchsia-700 font-bold text-lg">Download Brochure</Link>
              <Link href="/contact" className="w-full text-center py-4 rounded-xl bg-neutral-900 text-white font-bold text-lg">Get Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}