"jsx";
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

        {/* Main Structural Layout Container */}
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 pt-20 pb-12">

          {/* Advanced Asymmetrical Master Workspace Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-900">

            {/* ── COLUMN 1: INDUSTRIAL COMPLIANCE LOGO ZONE (4/12 Columns) ── */}
            <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start text-left">
              <div className="relative p-2 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-xl shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Entire Solutions"
                  width={210}
                  height={75}
                  className="object-contain"
                />
                {/* Geometrical bounding markers for a high-tech finish */}
                <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-purple-500" />
                <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-sky-400" />
              </div>

              <p className="mt-6 text-slate-400 font-medium text-sm sm:text-[15px] leading-relaxed max-w-sm tracking-wide">
                Premier manufacturing hub specializing in certified precision CNC sheet metal processing, 
                high-tolerance heavy industrial fabrication, and bespoke turnkey engineering assets.
              </p>

              {/* Redesigned Premium ISO Compliance Badge */}
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

            {/* ── COLUMN 2: HIGH-FIDELITY TRACKING NAVIGATION LINKS (2/12 Columns) ── */}
            <div className="md:col-span-4 lg:col-span-2 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-3 bg-purple-600" />
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">
                  Navigation
                </h3>
              </div>

              <nav className="w-full">
                <ul className="space-y-3.5 font-medium text-sm tracking-wide text-slate-400">
                  {["about", "services", "products", "clients", "contact"].map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link}`} 
                        className="group flex items-center gap-2 hover:text-white transition-colors duration-300 capitalize"
                      >
                        {/* Dynamic structural anchor track animation */}
                        <span className="w-0 h-[1px] bg-gradient-to-r from-purple-500 to-sky-400 transition-all duration-300 group-hover:w-4" />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {link === "about" ? "About Us" : link}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ── COLUMN 3: STRUCTURAL LOCATION & TELEMETRY NETWORK (3/12 Columns) ── */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-3 bg-indigo-500" />
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">
                  Factory HQ
                </h3>
              </div>
              
              <div className="relative p-4 rounded-xl bg-slate-900/30 border border-slate-900 text-slate-400 text-sm leading-relaxed tracking-wide">
                <span className="text-xs font-mono font-bold block text-indigo-400 mb-2">📍 PRODUCTION UNIT I</span>
                Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.
              </div>

              {/* Verified Grid Micro Social Anchors */}
              <div className="mt-5 flex items-center gap-2.5">
                {[
                  { name: "LinkedIn", href: "https://www.linkedin.com", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", color: "hover:text-[#0077b5] hover:border-[#0077b5]/30" },
                  { name: "Facebook", href: "https://www.facebook.com", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z", color: "hover:text-[#1877f2] hover:border-[#1877f2]/30" },
                  { name: "X", href: "https://x.com", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", color: "hover:text-white hover:border-slate-700" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-9 h-9 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-slate-500 shadow-inner transition-all duration-300 group ${social.color}`}
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4 fill-current transform group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                      <path d={social.path}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── COLUMN 4: CALIBRATED CONTACT METRICS (3/12 Columns) ── */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-3 bg-sky-500" />
                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">
                  Communications
                </h3>
              </div>

              <div className="space-y-4 text-slate-400 text-sm font-medium tracking-wide w-full">
                <div className="border-l-2 border-slate-800 pl-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Contact Executive</span>
                  <span className="text-slate-200 text-sm font-semibold">Sagar B Shete</span>
                </div>
                
                <div className="border-l-2 border-slate-800 pl-3 group cursor-pointer">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Hotlines</span>
                  <span className="text-slate-300 group-hover:text-sky-400 transition-colors font-mono">7020493239 / 9222089025</span>
                </div>

                <div className="border-l-2 border-slate-800 pl-3 group cursor-pointer">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Secure Mailing</span>
                  <span className="text-slate-300 group-hover:text-purple-400 transition-colors break-all font-mono text-[13px]">entiresolutions20@gmail.com</span>
                </div>

                <div className="border-l-2 border-slate-800 pl-3 group">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Network Domain</span>
                  <a href="http://entiresolutions.co.in" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-mono text-[13px] group-hover:underline">
                    entiresolutions.co.in
                  </a>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-850 px-3 py-2 rounded-md block text-center font-black tracking-widest select-all">
                    GSTIN: 27AAIFE3965C1ZG
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── LOWER META: INTELLECTUAL PROPERTY & TECH SIGNATURES ── */}
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 py-8 bg-[#010206]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-slate-500 text-xs tracking-wider font-medium">
              © {new Date().getFullYear()} ENTIRE SOLUTIONS. ARCHITECTURAL PATENTS RESERVED.
            </p>
            <p className="text-xs tracking-wider text-slate-500 font-medium flex items-center gap-1.5">
              <span>Engineered via</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent font-black tracking-widest uppercase">
                Qiro Tech Innovation Pvt. Ltd.
              </span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}