"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#02040a] text-white overflow-hidden border-t border-slate-900 font-sans">
      
      {/* ── TECHNICAL ENGINEERING PLOT BACKGROUND MATRIX ── */}
      <div className="absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
              <circle cx="50" cy="50" r="1.5" fill="rgba(162, 58, 236, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Atmospheric Soft Radiant Core Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(162,58,236,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,179,250,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-900">

            {/* ── COLUMN 1: INDUSTRIAL COMPLIANCE LOGO ZONE ── */}
            <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start text-left">
              <div className="relative p-2">
                <Image
                  src="/logo.png"
                  alt="Entire Solutions"
                  width={210}
                  height={75}
                  className="object-contain"
                />
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-500" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-sky-400" />
              </div>

              <p className="mt-6 text-slate-400 font-medium text-sm sm:text-[15px] leading-relaxed max-w-sm tracking-wide">
                Premier manufacturing hub specializing in certified precision CNC sheet metal processing, 
                high-tolerance heavy industrial fabrication, and bespoke turnkey engineering assets.
              </p>

              <div className="mt-6 flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[11px] font-mono font-black tracking-widest text-slate-300 uppercase">
                  QMS REG // ISO 9001:2015
                </span>
              </div>
            </div>

            {/* ── COLUMN 2: NAVIGATION ── */}
            <div className="md:col-span-4 lg:col-span-2 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-3 bg-purple-600" />
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">Navigation</h3>
              </div>
              <nav className="w-full">
                <ul className="space-y-3.5 font-medium text-sm tracking-wide text-slate-400">
                  {["about", "services", "products", "clients", "contact"].map((link) => (
                    <li key={link}>
                      <a href={`#${link}`} className="group flex items-center gap-2 hover:text-white transition-colors duration-300 capitalize">
                        <span className="w-0 h-[1px] bg-gradient-to-r from-purple-500 to-sky-400 transition-all duration-300 group-hover:w-4" />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">{link === "about" ? "About Us" : link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ── COLUMN 3: HQ ── */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-3 bg-indigo-500" />
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">Factory HQ</h3>
              </div>
              <div className="relative p-4 rounded-xl bg-slate-900/30 border border-slate-900 text-slate-400 text-sm leading-relaxed tracking-wide">
                <span className="text-xs font-mono font-bold block text-indigo-400 mb-2">📍 PRODUCTION UNIT I</span>
                Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.
              </div>
            </div>

            {/* ── COLUMN 4: COMMUNICATIONS ── */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-3 bg-sky-500" />
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">Communications</h3>
              </div>
              <div className="space-y-4 text-slate-400 text-sm font-medium tracking-wide w-full">
                <div className="border-l-2 border-slate-800 pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Contact Executive</span>
                  <span className="text-slate-200 text-sm font-semibold">Sagar B Shete</span>
                </div>
                <div className="border-l-2 border-slate-800 pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Hotlines</span>
                  <span className="text-slate-300 font-mono">7020493239 / 9222089025</span>
                </div>
                <div className="border-l-2 border-slate-800 pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Email</span>
                  <span className="text-slate-300 font-mono">entiresolutions20@gmail.com</span>
                </div>
                <div className="border-l-2 border-slate-800 pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Website</span>
                  <a href="http://entiresolutions.co.in/" className="text-sky-400 font-mono hover:underline">entiresolutions.co.in</a>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-850 px-3 py-2 rounded-md block text-center font-black tracking-widest">
                    GSTIN: 27AAIFE3965C1ZG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}