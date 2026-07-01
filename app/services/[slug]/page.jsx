"use client";

import { useState, use } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import serviceDetails from "@/data/serviceDetails";

export default function ServicePage({ params }) {
  const { slug } = use(params);
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) return notFound();

  const isParentService = service.sections && service.sections.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Service Title - Now always visible */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-16"
        >
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Industrial Services</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 text-slate-900 leading-tight">
            {service.title}
          </h1>
        </motion.div>

        {/* Content Area */}
        <div className="space-y-20">
          {isParentService ? (
            service.sections.map((section, idx) => <SectionCard key={idx} section={section} />)
          ) : (
            <SectionCard section={service} isStandalone />
          )}
        </div>
      </div>
    </div>
  );
}

/* Section Card Component */
function SectionCard({ section, isStandalone }) {
  const [image, setImage] = useState(section.mainImage || section.gallery?.[0]);
  const features = section.features || [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-10 p-8">
        {/* Image Area */}
        <div>
          <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden bg-slate-50">
            <Image src={image} alt={section.title} fill className="object-contain p-8" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            {[section.mainImage, ...(section.gallery || [])].slice(0, 3).map((img, i) => (
              <button key={i} onClick={() => setImage(img)} className={`h-24 rounded-xl overflow-hidden border-2 bg-white ${image === img ? "border-pink-500" : "border-slate-200"}`}>
                <Image src={img} alt="Thumb" width={250} height={150} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-center">
          <span className="uppercase tracking-[0.2em] text-pink-600 font-bold text-sm">
            {isStandalone ? "Overview" : "Service Detail"}
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-6">{section.title}</h2>
          <p className="text-slate-600 leading-8 text-lg mb-8">{section.description}</p>
          
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                  <span className="text-sm font-semibold text-slate-700">{f}</span>
                </div>
              ))}
            </div>
          )}
          
          <Link href={`/contact?service=${section.title}`} className="inline-flex items-center justify-center w-full md:w-max px-10 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all">
            Enquiry Now →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}