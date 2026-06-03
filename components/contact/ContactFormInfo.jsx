"use client";

import { motion } from "framer-motion";

export default function ContactFormInfo() {
  return (
    <div className="bg-[#fcfcfd] py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10 -mt-24"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form Card (Light Theme) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Start a Project</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#25b3fa]/10 outline-none transition" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#25b3fa]/10 outline-none transition" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#25b3fa]/10 outline-none transition" />
              <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-[#25b3fa]/10 outline-none transition" />
              
              <button className="w-full bg-gradient-to-r from-[#a23aec] to-[#25b3fa] text-white py-6 rounded-2xl font-bold text-lg hover:scale-[1.01] active:scale-[0.98] transition-all shadow-xl shadow-[#a23aec]/20">
                Send Message
              </button>
            </form>
          </div>

          {/* Details Column (Dark Theme) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b0f1a] rounded-[2.5rem] p-10 text-white shadow-2xl h-full flex flex-col justify-center border border-slate-800">
              <h3 className="text-[#25b3fa] uppercase tracking-widest text-xs font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Contact Person</p>
                  <p className="text-xl font-medium mt-1 text-white">Sagar B Shete</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Phone</p>
                  <p className="text-xl font-medium mt-1 text-white">7020493239 / 9222089025</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Email</p>
                  <p className="text-xl font-medium mt-1 text-white">entiresolutions20@gmail.com</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Address</p>
                  <p className="text-lg font-medium mt-1 text-white leading-relaxed">
                    Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105.
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">GST No</p>
                  <p className="text-xl font-medium mt-1 font-mono text-[#a23aec]">27AAIFE3965C1ZG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}