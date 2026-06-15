"use client";

import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const stats = [
  { val: 15, suffix: "+", label: "Years Experience", color: "bg-purple-500" },
  { val: 1200, suffix: "+", label: "Projects Completed", color: "bg-blue-500" },
  { val: 500, suffix: "+", label: "Happy Clients", color: "bg-yellow-400" },
  { val: 24, suffix: "/7", label: "Support Service", color: "bg-green-500" },
];

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Clients() {
  return (
    <section id="achievements" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[#6366f1] font-bold uppercase tracking-[0.3em] text-[11px] font-heading">
            OUR ACHIEVEMENTS
          </span>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight font-heading">
            Engineering Excellence <br />
            Backed by Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-lg opacity-80 ${stat.color}`} />
                <h3 className="text-5xl md:text-6xl font-extrabold text-neutral-950 font-heading relative z-10">
                  <Counter value={stat.val} />{stat.suffix}
                </h3>
              </div>
              
              <p className="text-neutral-600 font-medium text-sm md:text-base font-body tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}