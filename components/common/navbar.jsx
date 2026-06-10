"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Laser Cutting", "CNC Bending", "MIG Welding", "Stamping / Pressing",
    "Stainless Steel Laser Cutting", "Metal Sheet Laser Cutting", "Cnc Laser Cutting",
    "Brass Cutting", "Pipe Laser Cutting", "SS Filter Plate Cuttings",
    "Metal Fabrication", "Aluminum Laser Cutting", "Metal Jali Laser Cutting",
    "SS Jali Laser Cutting"
  ];

  const engineeringItems = [
    "R & D", "Prototyping", "Mass Production"
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", subLinks: services },
    { name: "Engineering", href: "/engineering", subLinks: engineeringItems },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSubMenu = (name) => {
    if (name === "Services") setIsServicesOpen(!isServicesOpen);
    if (name === "Engineering") setIsEngineeringOpen(!isEngineeringOpen);
  };

  const isSubMenuOpen = (name) => {
    if (name === "Services") return isServicesOpen;
    if (name === "Engineering") return isEngineeringOpen;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
        scrolled ? "max-w-[89rem] mt-3 mx-4 lg:mx-auto rounded-full bg-white/90 backdrop-blur-lg shadow-lg border border-neutral-200 px-8 h-16" 
                 : "w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200 px-6 h-20"
      }`}>
        
        <Link href="/" className="z-10 flex-shrink-0 w-32 md:w-40 ml-4">
          <Image src="/logo.png" alt="Entire Solutions" width={180} height={60} priority className="object-contain w-full h-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-7">
          {navLinks.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.href} className="font-bold text-[12px] uppercase tracking-[0.05em] text-neutral-900 hover:text-fuchsia-700 transition-colors py-4">
                {item.name}
              </Link>
              {item.subLinks && (
                <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-neutral-100 shadow-xl rounded-xl p-3 grid gap-1">
                    {item.subLinks.map((sub) => (
                      <Link 
                        key={sub} 
                        href={`${item.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-[13px] font-semibold text-neutral-700 hover:text-fuchsia-700 hover:bg-fuchsia-50 px-4 py-2.5 rounded-lg transition-all"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/brochure.pdf" className="px-4 py-2 rounded-full border-2 border-fuchsia-600 text-fuchsia-700 text-[11px] font-bold hover:bg-fuchsia-600 hover:text-white transition-all uppercase tracking-wider">Brochure</Link>
          <Link href="/contact" className="px-6 py-2 rounded-full bg-neutral-900 text-white text-[11px] font-bold hover:bg-fuchsia-700 transition-all shadow-md uppercase tracking-wider">Get Quote</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-neutral-900">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white p-8 overflow-y-auto">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-neutral-900">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div className="flex flex-col gap-6 mt-10">
            {navLinks.map((item) => (
              <div key={item.name} className="border-b border-neutral-100 pb-4">
                <div className="flex justify-between items-center" onClick={() => item.subLinks && toggleSubMenu(item.name)}>
                  <Link href={item.href} className="text-2xl font-bold text-neutral-900" onClick={(e) => { if (!item.subLinks) setIsOpen(false); else e.preventDefault(); }}>{item.name}</Link>
                  {item.subLinks && <span className="text-2xl font-bold text-fuchsia-700">{isSubMenuOpen(item.name) ? '−' : '+'}</span>}
                </div>
                
                {item.subLinks && isSubMenuOpen(item.name) && (
                  <div className="flex flex-col gap-2 mt-4 pl-4 border-l-2 border-fuchsia-200">
                    {item.subLinks.map((sub) => (
                      <Link key={sub} href={`${item.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-semibold text-neutral-700 py-2" onClick={() => setIsOpen(false)}>{sub}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}