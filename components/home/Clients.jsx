"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clients from "@/data/clients";

export default function Clients() {
  // Double the list array length dynamically to accommodate seamless infinite scrolling loops
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Structural Tech Background Mesh Accent Lineage */}
      <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)] pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="clients-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clients-blueprint-grid)" />
        </svg>
      </div>

      <div className="max-w-[96vw] mx-auto px-4 md:px-8 relative z-10">

        {/* Section Heading Group */}
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-xs uppercase tracking-[0.15em] border border-purple-100 shadow-[0_2px_10px_rgba(147,51,234,0.05)]"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            Trusted Partnerships
          </motion.span>

          <motion.h2 
            className="mt-5 text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            Our Major Clients
          </motion.h2>

          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-slate-600 text-base md:text-lg font-medium leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            We are proud to work with leading organizations across renewable
            energy, engineering, electrical, manufacturing, and industrial sectors.
          </motion.p>
        </div>

        {/* Continuous Automatic Slider Track Container */}
        <div className="relative w-full overflow-hidden py-6 mask-horizontal-fade select-none">
          
          {/* Subtle Linear Vignette Gradient Fades Over Infinite Track Edge Components */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

          <motion.div 
            className="flex gap-6 w-max items-center"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <motion.div
                key={`${client.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="group relative flex-shrink-0 w-64 md:w-72 bg-white/80 border border-slate-200/80 rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out backdrop-blur-md shadow-[0_4px_24px_rgba(241,245,249,0.7)] hover:shadow-[0_24px_50px_rgba(147,51,234,0.08)] hover:border-purple-500/40 hover:scale-[1.03] origin-center overflow-hidden"
              >
                {/* Advanced Technical Blueprint Subtle Neon Ambient Glow Backing */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-sky-400/0 group-hover:from-purple-500/[0.02] group-hover:to-sky-400/[0.02] transition-all duration-500" />
                
                {/* Precision Mechanical Micro Corner Bracket Accents */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />

                {/* Micro Tech Branding Accent Overlay Frame Inside Card */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />

                {/* Advanced Enhanced Logo Viewport Wrapper Layout with Increased Dimensions */}
                <div className="relative h-20 w-44 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src={client.image}
                    alt="Client Brand Asset"
                    fill
                    sizes="220px"
                    className="object-contain transition-all duration-300 pointer-events-none"
                    priority={idx < 8}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Global CSS Injector to provide safe hardware-accelerated composition bounds */}
      <style jsx global>{`
        .mask-horizontal-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

    </section>
  );
}