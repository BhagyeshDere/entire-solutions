"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import electricalDetails from "@/data/electricalDetails";

export default function ElectricalServicePage({ params }) {
  const { slug } = use(params);
  const service = electricalDetails.find((item) => item.slug === slug);

  const [activeImage, setActiveImage] = useState(service?.mainImage);
  
  useEffect(() => {
    if (service) setActiveImage(service.mainImage);
  }, [service]);

  if (!service) return notFound();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Title Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-fuchsia-600 uppercase tracking-[0.25em] font-bold text-sm">Electrical Services</motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-neutral-900 mt-4">{service.title}</motion.h1>
          <motion.p variants={itemVariants} className="text-neutral-600 mt-6 max-w-3xl mx-auto text-lg leading-8">{service.description}</motion.p>
        </motion.div>

        {/* Hero Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="grid lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="lg:col-span-3">
            <Image
              src={activeImage}
              alt={service.title}
              width={1000}
              height={600}
              className="rounded-3xl shadow-lg w-full h-[300px] md:h-[500px] object-cover transition-opacity duration-300"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            {[service.mainImage, ...service.gallery.slice(0, 2)].map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImage(img)}
                className={`relative flex-1 overflow-hidden rounded-2xl cursor-pointer transition-all border-2 ${activeImage === img ? "border-fuchsia-600" : "border-transparent"}`}
              >
                <Image
                  src={img}
                  alt={service.title}
                  width={300}
                  height={240}
                  className="w-full h-[93px] md:h-[157px] object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {service.features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
              <h3 className="font-bold text-neutral-900 mb-2">✔ {feature}</h3>
              <p className="text-neutral-500 text-sm">Industrial grade precision for reliable performance.</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Centralized CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex flex-col items-center justify-center pt-4 pb-2 gap-4"
        >
          <p className="text-neutral-500 font-medium">Ready to take the next step?</p>
          <Link
            href={{ pathname: "/contact", query: { service: service.title } }}
            className="inline-flex items-center justify-center bg-neutral-900 hover:bg-fuchsia-700 text-white px-12 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/20 transform hover:-translate-y-1"
          >
            Enquiry Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}