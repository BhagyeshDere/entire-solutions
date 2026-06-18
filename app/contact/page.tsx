"use client";

import { motion } from "framer-motion";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Building2, Send, Briefcase, Wrench } from "lucide-react";

// The form logic is now strictly synchronized with the URL
function ContactForm() {
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") || "";

  const [serviceValue, setServiceValue] = useState(serviceFromUrl);

  // This hook ensures that every time you click "Enquiry Now" 
  // from a different service/engineering page, the form field updates.
  useEffect(() => {
    setServiceValue(serviceFromUrl);
  }, [serviceFromUrl]);

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input type="text" placeholder="Your Name" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
        <input type="text" placeholder="Company Name" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input type="email" placeholder="Email Address" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
        <input type="tel" placeholder="Phone Number" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <Briefcase className="absolute left-4 top-4 text-slate-400" size={18} />
          <input type="text" placeholder="Engineering Field" className="w-full rounded-2xl bg-slate-50 border border-slate-200 pl-12 pr-6 py-4 outline-none focus:border-purple-500" />
        </div>
        <div className="relative">
          <Wrench className="absolute left-4 top-4 text-slate-400" size={18} />
          <input 
            type="text" 
            value={serviceValue}
            onChange={(e) => setServiceValue(e.target.value)}
            placeholder="Required Service" 
            className="w-full rounded-2xl bg-slate-50 border border-slate-200 pl-12 pr-6 py-4 outline-none focus:border-cyan-500" 
          />
        </div>
      </div>
      <textarea rows={4} placeholder="Project Details" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
      <button type="submit" className="w-full px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-pink-600 transition-all flex items-center justify-center gap-3">
        Send Inquiry <Send size={16} />
      </button>
    </form>
  );
}

export default function ContactPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-24 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('/images/contact.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 z-0 bg-slate-900/80" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Ready to build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">something strong?</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="relative -mt-16 md:-mt-20 pb-20 md:pb-24 z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 md:p-8 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
              <div className="flex items-center gap-3 mb-6 text-pink-600"><Building2 size={24} /> <h3 className="font-bold text-lg md:text-xl text-slate-900">Business Details</h3></div>
              <div className="space-y-4 text-sm text-slate-600">
                <p><strong className="text-slate-900 block">Company:</strong> Entire Solutions</p>
                <p><strong className="text-slate-900 block">Address:</strong> Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Bhosari - 412105.</p>
              </div>
            </motion.div>
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 md:p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6 text-purple-400"><Phone size={24} /> <h3 className="font-bold text-lg md:text-xl">Reach & Compliance</h3></div>
              <div className="space-y-4 text-sm text-slate-300">
                <p><strong className="text-white block">Phones:</strong> 7020493239 / 9222089025</p>
                <p><strong className="text-white block">Email:</strong> entiresolutions20@gmail.com</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">Let's Discuss Your Project</h3>
            {/* Suspense is mandatory for useSearchParams */}
            <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-20 md:pb-24">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
          <iframe src="https://www.google.com/maps/embed?pb=..." className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </div>
      </div>
    </main>
  );
}