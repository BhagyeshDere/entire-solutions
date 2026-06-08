import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050816] text-white overflow-hidden border-t border-white/10">
      {/* Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Section */}
          <div className="space-y-4">
            <Link href="/" className="block transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.png" 
                alt="Entire Solutions Logo"
                width={160}
                height={60}
                className="w-auto h-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Entire Solutions specializes in precision laser cutting, fabrication, 
              bending, powder coating, and custom industrial manufacturing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="hover:text-fuchsia-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Laser Cutting</li>
              <li>Sheet Metal Bending</li>
              <li>Heavy Fabrication</li>
              <li>Powder Coating</li>
              <li>Electrical Panel Boxes</li>
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-sm space-y-3 text-gray-300">
              <p className="flex items-start gap-2"><MapPin size={18} className="text-fuchsia-500 shrink-0" /> Bhosari, Pune - 412105</p>
              <p className="flex items-center gap-2"><Phone size={18} className="text-fuchsia-500 shrink-0" /> +91 7020493239</p>
              <p className="flex items-center gap-2"><Phone size={18} className="text-fuchsia-500 shrink-0" /> +91 9222089025</p>
              <p className="flex items-center gap-2"><Mail size={18} className="text-fuchsia-500 shrink-0" /> entiresolutions20@gmail.com</p>
              <p className="flex items-center gap-2"><Globe size={18} className="text-fuchsia-500 shrink-0" /> entiresolutions.co.in</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12" />

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Entire Solutions. All Rights Reserved.
          </p>
          
          <p className="text-gray-400">
            Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400 font-bold">Qiro Tech Innovation Pvt. Ltd.</span>
          </p>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400 font-bold italic tracking-wide">
            Strong Builds Start With Sharp Cuts
          </p>
        </div>
      </div>
    </footer>
  );
}