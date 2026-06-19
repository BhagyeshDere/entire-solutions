"use client";

import { motion } from "framer-motion";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Building2, Send, Briefcase, Wrench } from "lucide-react";
import emailjs from "@emailjs/browser";

// The form logic is now strictly synchronized with the URL
function ContactForm() {
  const searchParams = useSearchParams();

  // Get values from URL
  const serviceFromUrl = searchParams.get("service") || "";
  const engineeringFromUrl = searchParams.get("engineering") || "";

  // State
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [serviceValue, setServiceValue] = useState(serviceFromUrl);
  const [engineeringValue, setEngineeringValue] = useState(engineeringFromUrl);
  const [loading, setLoading] = useState(false);

  // Update Service field whenever URL changes
  useEffect(() => {
    setServiceValue(serviceFromUrl);
  }, [serviceFromUrl]);

  // Update Engineering field whenever URL changes
  useEffect(() => {
    setEngineeringValue(engineeringFromUrl);
  }, [engineeringFromUrl]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_x6e1xqi",     // Service ID
        "template_m94gv0s",   // Replace with your template ID
        {
          name,
          company,
          email,
          phone,
          engineering: engineeringValue,
          service: serviceValue,
          message,
        },
        "i_oehQNlJQ5NQShub"     // Replace with your public key
      );

      alert("Inquiry sent successfully!");

      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMessage("");

      if (!serviceFromUrl) setServiceValue("");
      if (!engineeringFromUrl) setEngineeringValue("");
    } catch (error) {
      console.log(error);
      alert("Failed to send inquiry.");
    }

    setLoading(false);
  };

  return (
    <form className="space-y-5" onSubmit={sendEmail}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500"
        />

        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500"
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <Briefcase className="absolute left-4 top-4 text-slate-400" size={18} />
          <input
            type="text"
            value={engineeringValue}
            onChange={(e) => setEngineeringValue(e.target.value)}
            placeholder="Engineering Field"
            className="w-full rounded-2xl bg-slate-50 border border-slate-200 pl-12 pr-6 py-4 outline-none focus:border-purple-500"
          />
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

      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe Your Requirements"
        className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-pink-600 transition-all flex items-center justify-center gap-3"
      >
        {loading ? "Sending..." : "Send Inquiry"}
        <Send size={16} />
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
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">Let's Discuss Your Requirements</h3>
            <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>


      
      
 {/* 3. MAP SECTION */}
{/* 3. MAP SECTION */}
<div className="max-w-7xl mx-auto px-6 pt-0 pb-20 md:pb-24">
  <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group cursor-pointer bg-slate-200">
    
    {/* Wrap the map in an anchor tag to ensure it opens the exact location on click */}
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Entire+Solutions+Wadmukhwadi+Pune" 
      target="_blank" 
      rel="noopener noreferrer"
      className="absolute inset-0 z-10 w-full h-full"
    >
      {/* Invisible overlay to capture the click */}
      <span className="sr-only">Open Entire Solutions in Google Maps</span>
    </a>

    {/* Real Interactive Google Map (disabled pointer events so the <a> tag handles clicks) */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.897453007077!2d73.856178!3d18.6487655!2m3!1f0!2f0!3m0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c75a40b904d9%3A0x6b2e1765c024aa86!2sEntire%20Solutions!5e0!3m2!1sen!2sin!4v1717000000000"
      width="100%"
      height="100%"
      style={{ border: 0, pointerEvents: 'none' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 w-full h-full"
      title="Entire Solutions Map"
    />

    {/* Address Card (Pointer events allowed to keep it visually interactive) */}
    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur p-6 rounded-[1.5rem] shadow-2xl max-w-sm border border-slate-100 z-20">
      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
        <Building2 size={18} className="text-pink-600" /> 
        Entire Solutions
      </h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        Sr. No. 101, Tapkir Nagar, Plot. No. 03, Khadi Machine Road, 
        Wadmukhwadi, Pune - 412105.
      </p>
    </div>
  </div>
</div>
    </main>
  );
}