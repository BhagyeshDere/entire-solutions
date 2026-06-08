"use client";

import {
  Factory,
  ShieldCheck,
  Wrench,
  Award,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden py-24">
      {/* Background Soft Glows (Subtle opacity for light theme) */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-fuchsia-200/50 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/50 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[6px] text-fuchsia-600 text-sm font-semibold">
            About Company
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900"
            style={{ fontFamily: "Times New Roman" }}
          >
            Engineering Excellence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
              Since 2020
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h3
              className="text-3xl md:text-4xl text-neutral-900 font-bold mb-6"
              style={{ fontFamily: "Times New Roman" }}
            >
              Entire Solutions
            </h3>
            <p
              className="text-neutral-600 text-lg leading-9"
              style={{ fontFamily: "Times New Roman" }}
            >
              Entire Solutions is a trusted fabrication and manufacturing
              company delivering precision engineering services for
              industrial and commercial sectors. We specialize in laser
              cutting, bending, welding, powder coating, heavy fabrication,
              and customized manufacturing solutions.
            </p>
            <p
              className="mt-6 text-neutral-600 text-lg leading-9"
              style={{ fontFamily: "Times New Roman" }}
            >
              With advanced machinery, skilled manpower, and a commitment
              to quality, we provide reliable, durable, and cost-effective
              solutions tailored to our clients' requirements while
              maintaining the highest industry standards.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <span className="px-5 py-3 rounded-full bg-neutral-200/50 border border-neutral-300 text-neutral-800 font-medium">
                Laser Cutting
              </span>
              <span className="px-5 py-3 rounded-full bg-neutral-200/50 border border-neutral-300 text-neutral-800 font-medium">
                Fabrication
              </span>
              <span className="px-5 py-3 rounded-full bg-neutral-200/50 border border-neutral-300 text-neutral-800 font-medium">
                Powder Coating
              </span>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Factory, color: "text-fuchsia-600", border: "hover:border-fuchsia-500", title: "Industrial Expertise", desc: "Complete light and heavy fabrication solutions for industrial applications." },
              { icon: ShieldCheck, color: "text-blue-600", border: "hover:border-blue-500", title: "Quality Focus", desc: "High-quality workmanship and strict quality control standards." },
              { icon: Wrench, color: "text-purple-600", border: "hover:border-purple-500", title: "Modern Machinery", desc: "Advanced equipment for precision manufacturing and fabrication." },
              { icon: Award, color: "text-cyan-600", border: "hover:border-cyan-500", title: "Trusted Partner", desc: "Delivering projects on time with reliability and customer satisfaction." },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white backdrop-blur-lg border border-neutral-200 rounded-3xl p-8 transition ${item.border} shadow-sm`}>
                <item.icon className={`${item.color} mb-4`} size={40} />
                <h4 className="text-neutral-900 text-2xl mb-3 font-semibold" style={{ fontFamily: "Times New Roman" }}>
                  {item.title}
                </h4>
                <p className="text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}