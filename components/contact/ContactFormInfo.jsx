"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, Send, User } from "lucide-react";

const contactInfo = [
  { icon: User, title: "Contact Person", value: "Sagar B Shete", sub: "Manager" },
  { icon: Phone, title: "Phone", value: "+91 7020493239 / 9222089025", sub: "Available for inquiries" },
  { icon: Mail, title: "Email", value: "entiresolutions20@gmail.com", sub: "Quick response guaranteed" },
  { 
    icon: MapPin, 
    title: "Address", 
    value: "Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105", 
    sub: "Near Aapulaki Hotel" 
  },
  { icon: Building2, title: "GST Number", value: "27AAIFE3965C1ZG", sub: "Registered Business" },
];

export default function ContactFormInfo() {
  return (
    <section id="contact-form" className="relative py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Brand-Aligned Soft Glows - Optimized for mobile/desktop */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-pink-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Contact Details</h2>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                className="group relative rounded-2xl md:rounded-[2rem] border border-slate-100 bg-white/80 backdrop-blur-sm p-4 md:p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-100">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{item.title}</p>
                    <h3 className="text-slate-900 font-bold text-sm md:text-base leading-tight mt-0.5">{item.value}</h3>
                    <p className="text-slate-500 text-[10px] md:text-[11px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-xl shadow-slate-200/40">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Send an Inquiry</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name" className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-pink-500 transition" />
                  <input type="text" placeholder="Company Name" className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-pink-500 transition" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="email" placeholder="Email Address" className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-pink-500 transition" />
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-pink-500 transition" />
                </div>
                <select className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-600 outline-none focus:border-pink-500 transition">
                  <option>Select Service</option>
                  <option>Laser Cutting</option>
                  <option>Heavy Fabrication</option>
                  <option>Powder Coating</option>
                  <option>Electrical Panel Manufacturing</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-pink-500 transition resize-none" />
                <button type="submit" className="w-full md:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-pink-600 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-pink-200 transition-all">
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 transition" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}