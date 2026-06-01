"use client";

const reasons = [
  {
    number: "01",
    title: "Sharp Laser Cutting Precision",
    description:
      "Advanced laser cutting technology delivers accurate dimensions, smooth edges and exceptional manufacturing consistency.",
  },
  {
    number: "02",
    title: "Strong Light & Heavy Fabrication",
    description:
      "From industrial structures to custom engineering components, we manufacture solutions built for strength and durability.",
  },
  {
    number: "03",
    title: "Modern Machinery & Skilled Workforce",
    description:
      "Our advanced infrastructure and experienced fabrication team ensure reliable execution across every project.",
  },
  {
    number: "04",
    title: "Competitive Pricing",
    description:
      "Optimized manufacturing processes allow us to deliver cost-effective solutions without compromising quality.",
  },
  {
    number: "05",
    title: "Trusted Industrial Partner",
    description:
      "Serving renewable energy, engineering, electrical and industrial sectors with a reputation for quality and on-time delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-24 bg-[#0B0F1A] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">

          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#25b3fa] text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Built On Precision.
            <span className="block bg-gradient-to-r from-[#a23aec] via-[#6366f1] to-[#25b3fa] bg-clip-text text-transparent">
              Driven By Quality.
            </span>
          </h2>

        </div>

        {/* Timeline Layout */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#a23aec] via-[#6366f1] to-[#25b3fa]"></div>

          <div className="space-y-16">

            {reasons.map((item) => (
              <div
                key={item.number}
                className="relative pl-20"
              >

                {/* Circle */}
                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-gradient-to-r from-[#a23aec] to-[#25b3fa] flex items-center justify-center font-black text-sm shadow-lg">
                  {item.number}
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-8 max-w-3xl">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}