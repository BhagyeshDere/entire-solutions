import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-slate-900">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-slate-950 to-sky-950/20 opacity-80"></div>

      <div className="relative z-10">

        {/* Main Footer Container */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">

          {/* Optimized 4-Column Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">

            {/* Column 1: Company Profile Info */}
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
              <Image
                src="/logo.png"
                alt="Entire Solutions"
                width={220}
                height={80}
                className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
              />

              <p className="mt-6 text-slate-300 leading-7 text-sm md:text-base max-w-sm">
                Entire Solutions specializes in Light & Heavy Fabrication,
                Laser Cutting, Sheet Metal Processing, Electrical Panel
                Manufacturing, Powder Coating, and Renewable Energy
                Equipment Fabrication.
              </p>

              <div className="mt-5">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-sky-500 text-xs font-semibold uppercase tracking-wider shadow-md shadow-purple-950/50">
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-10 after:h-[2px] after:bg-purple-500">
                Quick Links
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm md:text-base w-full">
                <li>
                  <a href="#about" className="hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#clients" className="hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Factory Address */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-10 after:h-[2px] after:bg-indigo-500">
                Our Factory Address
              </h3>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xs md:max-w-none">
                📍 Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.
              </p>

              {/* Verified Social Handles Wrapper Block */}
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/40 shadow-sm transition-all duration-300 group" aria-label="LinkedIn Profile">
                  <svg className="w-4 h-4 fill-current transform group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#1877f2] hover:border-[#1877f2]/40 shadow-sm transition-all duration-300 group" aria-label="Facebook Page">
                  <svg className="w-4 h-4 fill-current transform group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 shadow-sm transition-all duration-300 group" aria-label="X Profile">
                  <svg className="w-3.5 h-3.5 fill-current transform group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 4: Contact Details */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-10 after:h-[2px] after:bg-sky-500">
                Contact Info
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm md:text-base w-full">
                <p className="text-slate-400 text-xs tracking-wider uppercase font-semibold">
                  👤 Contact Person: <span className="text-slate-200 normal-case font-normal">Sagar B Shete</span>
                </p>
                <p className="hover:text-white transition-colors duration-200">
                  📞 <span className="tracking-wide">7020493239</span> / <span className="tracking-wide">9222089025</span>
                </p>
                <p className="hover:text-white transition-colors duration-200 break-all inline-block">
                  ✉️ <span className="hover:underline cursor-pointer">entiresolutions20@gmail.com</span>
                </p>
                <p className="text-slate-400 text-xs tracking-wider font-mono">
                  🌐 <a href="http://entiresolutions.co.in" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white">http://entiresolutions.co.in</a>
                </p>
                <div className="pt-1">
                  <p className="text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-md inline-block text-xs font-mono tracking-wider">
                    GST: 27AAIFE3965C1ZG
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-900"></div>

        {/* Bottom Rights & Developer Credit Section */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-slate-400 text-xs md:text-sm tracking-wide">
              © {new Date().getFullYear()} Entire Solutions. All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm text-slate-400 tracking-wide">
              Developed by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent font-semibold hover:opacity-90 transition-opacity">
                Qiro Tech Innovation Pvt. Ltd.
              </span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}