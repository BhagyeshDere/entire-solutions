"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

const services = [
  {
    title: "Laser Cutting",
    image: "/images/services/laser-cutting.jpg",
    description: "High-precision fiber laser cutting solutions for industrial manufacturing with clean finishes and superior accuracy.",
  },
  {
    title: "Sheet Metal Cutting & Bending",
    image: "/images/services/sheet-metal.png",
    description: "Advanced CNC sheet metal processing and bending solutions designed for consistency and precision.",
  },
  {
    title: "Light & Heavy Fabrication",
    image: "/images/services/heavy-fabrication1.jpg",
    description: "Custom fabrication services for industrial structures, heavy assemblies, fixtures, and engineered products.",
  },
  {
    title: "Powder Coating & Painting",
    image: "/images/services/powder-coating.jpg",
    description: "Durable industrial coating systems providing corrosion resistance and premium finishing quality.",
  },
  {
    title: "Electrical Panel Boxes",
    image: "/images/services/electrical-panels.png",
    description: "Manufacturing of MCC, PCC, APFC, AMF, and custom electrical panel enclosures.",
  },
  {
    title: "Welding, Drilling & Tapping",
    image: "/images/services/welding-assembly.jpg",
    description: "Professional welding, drilling, and tapping operations ensuring structural integrity and precision.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#fafbfc] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6b21a8] via-[#4f46e5] to-[#06b6d4] opacity-30" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="uppercase tracking-[0.3em] text-[#38bdf8] text-xs font-bold">Our Expertise</span>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
            INDUSTRIAL <br /> SERVICES
          </h1>
          <p className="mt-8 text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Precision manufacturing, fabrication, and industrial engineering solutions 
            crafted to meet the high standards of modern industry.
          </p>
        </motion.div>
      </section>

      {/* SERVICES LIST */}
      {services.map((service, index) => (
        <motion.section 
          key={service.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="py-24 border-t border-slate-100"
        >
          <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 hover:scale-110" />
            </div>

            <div>
              <span className="text-[#4f46e5] font-black text-sm uppercase tracking-[0.2em]">Service 0{index + 1}</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{service.title}</h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {["Precision Engineering", "Quality Assurance", "Industrial Standards", "Timely Delivery"].map((spec) => (
                  <div key={spec} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm font-semibold text-slate-700">
                    {spec}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  Enquire Now <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      ))}
    </main>
  );
}