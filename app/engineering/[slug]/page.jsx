"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import engineeringDetails from "@/data/engineeringDetails";

export default function EngineeringPage({ params }) {
  const { slug } = use(params);

  const engineering = engineeringDetails.find(
    (item) => item.slug === slug
  );

  if (!engineering) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-32 pb-20 md:pb-28 px-4 md:px-5">
      {/* Container: Stacked on mobile, 2-column on large screens */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-start">

        {/* Left Column: Main Image Only */}
        <div className="space-y-6">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col pt-0 md:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Engineering Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 leading-[1.1]">
              {engineering.title}
            </h1>
          </motion.div>

          <div className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 md:mb-12 border-l-4 border-pink-500 pl-6 md:pl-8">
            <p className="max-w-2xl">{engineering.description}</p>
          </div>

          <Link
            href={{
              pathname: "/contact",
              query: {
                engineering: engineering.title,
              },
            }}
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 w-full md:w-max rounded-2xl bg-slate-900 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-pink-500/30"
          >
            Enquiry Now
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}