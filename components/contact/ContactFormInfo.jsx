"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, Send, User } from "lucide-react";

const contactInfo = [
  {
    icon: User,
    title: "Contact Person",
    value: "Sagar B Shete",
    sub: "Manager",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7020493239 / 9222089025",
    sub: "Available for inquiries",
  },
  {
    icon: Mail,
    title: "Email",
    value: "entiresolutions20@gmail.com",
    sub: "Quick response guaranteed",
  },
  {
    icon: MapPin,
    title: "Address",
    value:
      "Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105",
    sub: "Near Aapulaki Hotel",
  },
  {
    icon: Building2,
    title: "GST Number",
    value: "27AAIFE3965C1ZG",
    sub: "Registered Business",
  },
];

export default function ContactFormInfo() {
  return (
    <section
      id="contact-form"
      className="relative py-16 md:py-24 bg-[#FAFAFA] overflow-hidden"
    >
      {/* Logo Theme Glow Effects */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#A23AEC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#25B3FA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">

            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#25B3FA]">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 mb-8 leading-tight">
              Contact
              <span className="bg-gradient-to-r from-[#A23AEC] via-[#8B5CF6] to-[#25B3FA] bg-clip-text text-transparent">
                {" "}Information
              </span>
            </h2>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  className="group relative rounded-2xl md:rounded-[2rem] border border-slate-100 hover:border-[#A23AEC]/20 bg-white/80 backdrop-blur-sm p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#A23AEC] via-[#8B5CF6] to-[#25B3FA] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#A23AEC]/20">
                      <item.icon className="text-white" size={20} />
                    </div>

                    <div className="overflow-hidden">
                      <p className="text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                        {item.title}
                      </p>

                      <h3 className="text-slate-900 font-bold text-sm md:text-base leading-tight mt-1">
                        {item.value}
                      </h3>

                      <p className="text-slate-500 text-[10px] md:text-[11px] mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-xl shadow-slate-200/40">

              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#A23AEC]">
                Send Inquiry
              </span>

              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 mb-8 leading-tight">
                Let's Discuss Your
                <span className="block bg-gradient-to-r from-[#A23AEC] via-[#8B5CF6] to-[#25B3FA] bg-clip-text text-transparent">
                  Next Project
                </span>
              </h3>

              <form className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-[#A23AEC] focus:ring-2 focus:ring-[#A23AEC]/10 transition"
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-[#A23AEC] focus:ring-2 focus:ring-[#A23AEC]/10 transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-[#A23AEC] focus:ring-2 focus:ring-[#A23AEC]/10 transition"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-[#A23AEC] focus:ring-2 focus:ring-[#A23AEC]/10 transition"
                  />
                </div>

                <select className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-slate-600 outline-none focus:border-[#A23AEC] focus:ring-2 focus:ring-[#A23AEC]/10 transition">
                  <option>Select Service</option>
                  <option>Laser Cutting</option>
                  <option>Heavy Fabrication</option>
                  <option>Powder Coating</option>
                  <option>Electrical Panel Manufacturing</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 outline-none focus:border-[#A23AEC] focus:ring-2 focus:ring-[#A23AEC]/10 transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full md:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#A23AEC] via-[#8B5CF6] to-[#25B3FA] text-white font-bold hover:shadow-xl hover:shadow-[#A23AEC]/25 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Inquiry

                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}