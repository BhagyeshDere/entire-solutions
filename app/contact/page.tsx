"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, Suspense, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Building2, Send, Briefcase, Wrench, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// --- CUSTOM NOTIFICATION COMPONENT ---
function Notification({ message, type, onClose }: { message: string, type: 'success' | 'error', onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`fixed top-24 right-6 z-[9999] flex items-center gap-4 p-4 rounded-2xl shadow-2xl border ${type === 'success' ? 'bg-white border-fuchsia-100' : 'bg-white border-red-100'}`}
    >
      {type === 'success' ? <CheckCircle2 className="text-fuchsia-600" /> : <XCircle className="text-red-500" />}
      <p className="text-sm font-bold text-slate-900">{message}</p>
    </motion.div>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const serviceFromUrl = searchParams.get("service") || "";
  const engineeringFromUrl = searchParams.get("engineering") || "";

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [serviceValue, setServiceValue] = useState(serviceFromUrl);
  const [engineeringValue, setEngineeringValue] = useState(engineeringFromUrl);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setServiceValue(serviceFromUrl);
    setEngineeringValue(engineeringFromUrl);
  }, [serviceFromUrl, engineeringFromUrl]);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_x6e1xqi",
        "template_m94gv0s",
        { name, company, email, phone, engineering: engineeringValue, service: serviceValue, message },
        "i_oehQNlJQ5NQShub"
      );

      setNotification({ message: "Inquiry sent successfully!", type: 'success' });
      setName(""); setCompany(""); setEmail(""); setPhone(""); setMessage("");
    } catch (error) {
      setNotification({ message: "Failed to send. Please try again.", type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
      <form className="space-y-5" onSubmit={sendEmail}>
        {/* ... (Keep your existing inputs exactly as they were) ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
           <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <div className="relative"><Briefcase className="absolute left-4 top-4 text-slate-400" size={18} /><input type="text" value={engineeringValue} onChange={(e) => setEngineeringValue(e.target.value)} placeholder="Engineering Field" className="w-full rounded-2xl bg-slate-50 border border-slate-200 pl-12 pr-6 py-4 outline-none focus:border-purple-500" /></div>
           <div className="relative"><Wrench className="absolute left-4 top-4 text-slate-400" size={18} /><input type="text" value={serviceValue} onChange={(e) => setEngineeringValue(e.target.value)} placeholder="Required Service" className="w-full rounded-2xl bg-slate-50 border border-slate-200 pl-12 pr-6 py-4 outline-none focus:border-cyan-500" /></div>
        </div>
        <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe Your Requirements" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 outline-none focus:border-pink-500" />
        <button type="submit" disabled={loading} className="w-full px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-fuchsia-600 transition-all flex items-center justify-center gap-3">
          {loading ? "Sending..." : "Send Inquiry"}
          <Send size={16} />
        </button>
      </form>
    </>
  );
}

// ... Keep your ContactPage component exactly as is.

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
                <p><strong className="text-white block">Email:</strong> marketing@entiresolutions.co.in<br></br>
contact@entiresolutions.co.in</p>
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
  <div className="relative w-full h-[350px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
    
    {/* Google Maps Embed - Use the official iframe code from Google Maps share feature */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8845607736637!2d73.85617837593282!3d18.64876556812836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7af5b5d1947%3A0x63351ec946e39275!2sEntire%20Solutions!5e0!3m2!1sen!2sin!4v1716388402778!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 w-full h-full"
      title="Entire Solutions Map"
    />

    {/* Address Card */}
    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl max-w-sm border border-slate-100 z-10">
      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
        <Building2 size={18} className="text-pink-600" /> 
        Entire Solutions
      </h4>
      <p className="text-sm text-slate-700 leading-relaxed mb-6">
        Sr. No. 101, Tapkir Nagar, Plot. No. 03, Khadi Machine Road, 
        Wadmukhwadi, Pune - 412105.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
       
        <a 
          href="https://www.google.com/maps/place/?q=place_id:ChIJIZNUdyjHwjsRsibpf6Ckq8k" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full text-center text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors py-2"
        >
          Open in Maps →
        </a>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}