"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] relative overflow-hidden">
      
      {/* --- UPDATED DARK PURPLE HERO SECTION --- */}
      <div className="bg-gradient-to-br from-[#6b21a8] to-[#4338ca] pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-200 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Let's connect</span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Touch</span>
          </h1>
        </div>
      </div>

      {/* Main Content (Untouched structure) */}
      <div className="max-w-7xl mx-auto relative z-10 px-6 -mt-12">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Card */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col justify-between">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Start a Project</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-indigo-500/10 outline-none transition" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-indigo-500/10 outline-none transition" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-indigo-500/10 outline-none transition" />
              <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-indigo-500/10 outline-none transition" />
              
              <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all hover:scale-[1.01] active:scale-[0.98] shadow-xl shadow-indigo-500/20">
                Send Message
              </button>
            </form>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl h-full flex flex-col justify-center">
              <h3 className="text-indigo-400 uppercase tracking-widest text-xs font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Contact Person</p>
                  <p className="text-xl font-medium mt-1 tracking-tight">Sagar B Shete</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Phone</p>
                  <p className="text-xl font-medium mt-1 tracking-tight">7020493239 / 9222089025</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Email</p>
                  <p className="text-xl font-medium mt-1 tracking-tight">entiresolutions20@gmail.com</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">Address</p>
                  <p className="text-lg font-medium mt-1 leading-relaxed">
                    Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase font-semibold">GST No</p>
                  <p className="text-xl font-medium mt-1 tracking-tight font-mono">27AAIFE3965C1ZG</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 w-full h-[600px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl relative group mb-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892016462744!2d73.86470007575292!3d18.66579046603417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c813c9e6d32f%3A0x6b77209774618e40!2sWadmukhwadi%20Rd%2C%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717319000000!5m2!1sen!2sin"
            className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </main>
  );
}