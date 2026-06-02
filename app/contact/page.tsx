export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-24 px-6 relative overflow-hidden">
      {/* Abstract Mesh Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Let's connect</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Touch</span>
          </h1>
        </div>

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

          {/* Details Column (Updated with address) */}
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

        {/* Map with Top-Left Address Overlay */}
        <div className="mt-8 w-full h-[600px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.822361138243!2d73.8569830752174!3d18.627725982500057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c80000000001%3A0x0!2sEntire+Solutions!5e0!3m2!1sen!2sin!4v1717300000000!5m2!1sen!2sin"
            className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          />
          
          {/* Top-Left Address Overlay */}
          <div className="absolute top-8 left-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-sm border border-white/50">
            <p className="text-indigo-600 text-xs uppercase font-bold tracking-widest mb-2">Our Office</p>
            <p className="text-slate-900 font-medium leading-relaxed">
              Plot No. 03, Sr.No. 101, Wadmukhwadi Road, Tapkir Nagar, Khadi Machine Road, Bhosari - 412105. Near Aapulaki Hotel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}