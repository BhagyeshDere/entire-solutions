"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import engineeringDetails from "@/data/engineeringDetails";

export default function EngineeringPage({ params }) {
  const { slug } = use(params);

  const engineering = engineeringDetails.find((item) => item.slug === slug);

  if (!engineering) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-32 pb-20 md:pb-28 px-4 md:px-5">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-slate-200"
          >
            <Image
              src={engineering.mainImage}
              alt={engineering.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="flex flex-col pt-0 md:pt-4">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Engineering Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 leading-[1.1]">
              {engineering.title}
            </h1>
            <div className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 md:mb-12 border-l-4 border-pink-500 pl-6 md:pl-8">
              <p className="max-w-2xl">{engineering.description}</p>
            </div>
            <Link
              href={{
                pathname: "/contact",
                query: { engineering: engineering.title },
              }}
              className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 w-full md:w-max rounded-2xl bg-slate-900 text-white font-bold transition-all hover:scale-[1.02] shadow-xl hover:shadow-pink-500/30"
            >
              Enquiry Now <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Dynamic Sections (Only renders if sections exist) */}
        {engineering.sections && engineering.sections.length > 0 && (
          <div className="space-y-20">
            {engineering.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 md:gap-16 items-center ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {section.features.map((feat, fIdx) => (
                      <span key={fIdx} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Image src={section.mainImage} alt={section.title} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}