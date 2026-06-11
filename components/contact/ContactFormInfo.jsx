"use client";

import { motion } from "framer-motion";

export default function ContactFormInfo() {
  return (
    // Added -mt-20 to pull the section upward, creating the overlap effect
    // Added relative and z-20 to ensure it stays on top of subsequent sections
    <section className="bg-[#F8F9FC] py-24 px-6 relative overflow-hidden -mt-20 z-20">
      
      {/* Abstract Background Element */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full blur-[120px] opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (spanning 7) */}
          <div className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
            <div className="mb-10">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Let's Connect</span>
              <h2 className="text-5xl font-black text-slate-900 mt-3">Start a New Project</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:border-indigo-500 outline-none transition-all focus:shadow-lg focus:shadow-indigo-500/10" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:border-indigo-500 outline-none transition-all focus:shadow-lg focus:shadow-indigo-500/10" />
              </div>
              
              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-500 focus:border-indigo-500 outline-none transition-all">
                <option value="">Select Service Type</option>
                <option value="wind-energy">Wind Energy Solutions</option>
                <option value="fabrication">Industrial Fabrication</option>
                <option value="electrical">Electrical Panels</option>
              </select>

              <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:border-indigo-500 outline-none transition-all focus:shadow-lg focus:shadow-indigo-500/10" />
              
              <button className="group relative w-full overflow-hidden bg-slate-900 text-white py-6 rounded-2xl font-bold text-lg transition-all hover:bg-indigo-600">
                <span className="relative z-10">Send Project Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details (spanning 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-indigo-900 p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-10">Office Details</h3>
              
              <div className="space-y-10">
                {[
                  { label: "Phone & Mobile", value: "7020493239 / 9222089025" },
                  { label: "Email Address", value: "entiresolutions20@gmail.com" },
                  { label: "Registered Office", value: "Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Bhosari - 412105." }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="text-indigo-300 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{item.label}</p>
                    <p className="text-lg font-medium leading-relaxed group-hover:text-cyan-300 transition-colors">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-indigo-800">
                  <p className="text-indigo-300 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">GST Identification</p>
                  <p className="text-white font-mono text-xl tracking-wider">27AAIFE3965C1ZG</p>
              </div>
            </div>
            
            {/* Visual Callout */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg text-center">
                <p className="text-slate-600 font-medium">Have a specific question? <a href="#" className="text-indigo-600 underline font-bold">Check our FAQ</a></p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}