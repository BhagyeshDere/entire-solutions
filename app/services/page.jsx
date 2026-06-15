"use client";

import { useState } from "react";
import serviceDetails from "@/data/serviceDetails";

export default function ServicesPage() {
  // Set the first service as default, or null if you want a blank state
  const [selectedService, setSelectedService] = useState(serviceDetails[0]);

  return (
    <div className="container mx-auto py-20 px-5">
      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* Sidebar: List of all services */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          {serviceDetails.map((service) => (
            <button
              key={service.slug}
              onClick={() => setSelectedService(service)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedService.slug === service.slug 
                  ? "border-pink-500 bg-pink-50 shadow-md" 
                  : "border-slate-200 hover:border-blue-400"
              }`}
            >
              <h3 className="font-bold text-slate-900">{service.title}</h3>
            </button>
          ))}
        </div>

        {/* Main Area: Dynamic display of selected service */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h1 className="text-4xl font-extrabold mb-6 text-slate-900">{selectedService.title}</h1>
            <p className="text-slate-600 mb-8 text-lg">{selectedService.description}</p>
            
            <h4 className="font-bold text-slate-400 uppercase tracking-widest text-sm mb-4">Key Features</h4>
            <ul className="grid sm:grid-cols-2 gap-4">
              {selectedService.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}