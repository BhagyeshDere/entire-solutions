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
    { title: "Laser Cutting", slug: "laser-cutting" },
    { title: "Electrical Panel Boxes", slug: "electrical-panel-boxes" },
    { title: "Brass Cutting", slug: "brass-cutting" },
    { title: "Metal Fabrication", slug: "metal-fabrication" },
    { title: "Powder Coatings", slug: "powder-coatings" },
    { title: "CNC Bending", slug: "cnc-bending" },
    { title: "MIG Welding", slug: "mig-welding" },
    { title: "Stamping / Pressing", slug: "stamping-pressing" },
    { title: "Stainless Steel Laser Cutting", slug: "stainless-steel-laser-cutting" },
    { title: "Metal Sheet Laser Cutting", slug: "metal-sheet-laser-cutting" },
    { title: "Cnc Laser Cutting", slug: "cnc-laser-cutting" },
    { title: "Pipe Laser Cutting", slug: "pipe-laser-cutting" },
    { title: "SS Filter Plate Cuttings", slug: "ss-filter-plate-cuttings" },
    { title: "Aluminum Laser Cutting", slug: "aluminum-laser-cutting" },
    { title: "Metal Jali Laser Cutting", slug: "metal-jali-laser-cutting" },
    { title: "SS Jali Laser Cutting", slug: "ss-jali-laser-cutting" },
  ];

  const engineeringItems = [
    { title: "R & D", slug: "r-and-d" },
    { title: "Prototyping", slug: "prototyping" },
    { title: "Mass Production", slug: "mass-production" }
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", subLinks: services },
    { name: "Engineering", href: "/engineering", subLinks: engineeringItems },
    { name: "Gallery", href: "/gallery" },
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
              <Link 
                href={item.subLinks ? "#" : item.href} 
                onClick={(e) => { if (item.subLinks) e.preventDefault(); }}
                className="font-bold text-[12px] uppercase tracking-[0.05em] text-neutral-900 hover:text-fuchsia-700 transition-colors py-4 cursor-pointer"
              >
                {item.name}
              </Link>
              {item.subLinks && (
                <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-neutral-100 shadow-xl rounded-xl py-2 flex flex-col max-h-[75vh] overflow-y-auto">
                    {item.subLinks.map((sub) => (
                      <Link key={sub.slug} href={`${item.href}/${sub.slug}`} className="text-[12px] font-semibold text-neutral-700 hover:text-fuchsia-700 hover:bg-fuchsia-50 px-6 py-1.5 transition-all">
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a 
            href="images/Entire_Solutions_Final_Company_Profile.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Entire_Solutions_Brochure.pdf"
            className="px-4 py-2 rounded-full border-2 border-fuchsia-600 text-fuchsia-700 text-[11px] font-bold hover:bg-fuchsia-600 hover:text-white transition-all uppercase tracking-wider"
          >
            Brochure
          </a>
          <Link href="/contact" className="px-6 py-2 rounded-full bg-neutral-900 text-white text-[11px] font-bold hover:bg-fuchsia-700 transition-all shadow-md uppercase tracking-wider">Get Quote</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-neutral-900">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Mobile Drawer remains untouched */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white p-8 overflow-y-auto">
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-neutral-900"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((item) => (
                <div key={item.name} className="border-b border-neutral-100 pb-4">
                  <div className="flex justify-between items-center" onClick={() => item.subLinks && toggleSubMenu(item.name)}>
                    <Link href={item.subLinks ? "#" : item.href} className="text-2xl font-bold text-neutral-900" onClick={(e) => { if (item.subLinks) e.preventDefault(); else setIsOpen(false); }}>
                      {item.name}
                    </Link>
                    {item.subLinks && <span className="text-2xl font-bold text-fuchsia-700 cursor-pointer">{isSubMenuOpen(item.name) ? '−' : '+'}</span>}
                  </div>
                  {item.subLinks && isSubMenuOpen(item.name) && (
                    <div className="flex flex-col gap-2 mt-4 pl-4 border-l-2 border-fuchsia-200">
                      {item.subLinks.map((sub) => (
                        <Link key={sub.slug} href={`${item.href}/${sub.slug}`} className="text-lg font-semibold text-neutral-700 py-2" onClick={() => setIsOpen(false)}>{sub.title}</Link>
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