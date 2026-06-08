"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clients from "@/data/clients";

export default function Clients() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-24 bg-white relative overflow-hidden border-t border-b border-neutral-100">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold uppercase tracking-[0.3em] text-[11px]">
            Global Industry Partners
          </span>
          <h2 className="mt-6 text-5xl md:text-7xl font-bold font-serif text-neutral-900 leading-tight">
            Strategic <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Networks</span>
          </h2>
        </div>

        {/* Kinetic Ticker - Original Color Logos in Boxes */}
        <div className="relative w-full overflow-hidden mask-horizontal-fade">
          <motion.div 
            className="flex gap-12 w-max items-center"
            animate={{ x: [0, -2500] }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                /* Added a subtle border/box for structure */
                className="group relative w-64 h-32 flex items-center justify-center border border-neutral-100 rounded-2xl bg-neutral-50/50 hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                {/* Logo remains in original color, opacity 100 */}
                <div className="relative w-4/5 h-4/5">
                  <Image
                    src={client.image}
                    alt="Client Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Contextual Line */}
        <div className="mt-24 text-center">
          <p className="text-neutral-600 font-medium italic text-sm tracking-wide">
            Maintaining excellence through long-term strategic alliances.
          </p>
          <div className="w-32 h-[2px] bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-8" />
        </div>
      </div>

      <style jsx global>{`
        .mask-horizontal-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}