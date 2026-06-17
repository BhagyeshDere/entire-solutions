"use client";

import { motion } from "framer-motion";
import { Phone, Building2, Send, Briefcase, Wrench } from "lucide-react";

export default function ContactFormInfo() {
  // Animation variants for smooth entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact-form" className="relative pt-12 pb-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Consolidated Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-pink-600 font-bold tracking-[0.2em] uppercase text-xs">Reach Out</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
                Contact <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600">Information</span>
              </h2>
            </div>

            {/* Two Main Thematic Cards */}
            <div className="space-y-6">
              {/* Card 1: Business & Location */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }} 
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3 mb-4 text-pink-600">
                  <Building2 size={24} />
                  <h3 className="font-bold text-lg text-slate-900">Business Details</h3>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong className="text-slate-900">Company:</strong> Entire Solutions</p>
                  <p><strong className="text-slate-900">Contact:</strong> Sagar B Shete (Manager)</p>
                  <p><strong className="text-slate-900">Address:</strong> Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.</p>
                </div>
              </motion.div>

              {/* Card 2: Communication & Compliance */}
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }} 
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3 mb-4 text-purple-600">
                  <Phone size={24} />
                  <h3 className="font-bold text-lg text-slate-900">Reach & Compliance</h3>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong className="text-slate-900">Phones:</strong> 7020493239 / 9222089025</p>
                  <p><strong className="text-slate-900">Email:</strong> entiresolutions20@gmail.com</p>
                  <p><strong className="text-slate-900">GST No:</strong> 27AAIFE3965C1ZG</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <span className="text-purple-600 font-bold tracking-[0.2em] uppercase text-xs">Send Inquiry</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-8">
                Let's Discuss Your Next Project
              </h3>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name" className="w-full rounded-2xl bg-slate-50 border border-slate-100 px-6 py-4 focus:border-pink-500 outline-none transition-all" />
                  <input type="text" placeholder="Company Name" className="w-full rounded-2xl bg-slate-50 border border-slate-100 px-6 py-4 focus:border-pink-500 outline-none transition-all" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="email" placeholder="Email Address" className="w-full rounded-2xl bg-slate-50 border border-slate-100 px-6 py-4 focus:border-pink-500 outline-none transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-2xl bg-slate-50 border border-slate-100 px-6 py-4 focus:border-pink-500 outline-none transition-all" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                     <Briefcase className="absolute left-4 top-4 text-slate-400" size={18} />
                     <input type="text" placeholder="Engineering Field" className="w-full rounded-2xl bg-slate-50 border border-slate-100 pl-12 pr-6 py-4 focus:border-purple-500 outline-none transition-all" />
                  </div>
                  <div className="relative">
                     <Wrench className="absolute left-4 top-4 text-slate-400" size={18} />
                     <input type="text" placeholder="Required Service" className="w-full rounded-2xl bg-slate-50 border border-slate-100 pl-12 pr-6 py-4 focus:border-cyan-500 outline-none transition-all" />
                  </div>
                </div>

                <textarea rows={4} placeholder="Project Details" className="w-full rounded-2xl bg-slate-50 border border-slate-100 px-6 py-4 focus:border-pink-500 outline-none transition-all resize-none" />

                <button type="submit" className="w-full md:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-pink-500/20 transition-all flex items-center justify-center gap-3">
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}