const serviceDetails = [
  {
    slug: "laser-cutting",
    title: "Laser Cutting",
    mainImage: "/images/sub-services/laser-cutting/lc_main.png",
    gallery: [
      "/images/sub-services/laser-cutting/lc_1.png",
      "/images/sub-services/laser-cutting/lc_2.png"
    ],
    description: "Our state-of-the-art fiber laser cutting systems provide unparalleled accuracy for complex geometries. We specialize in processing a wide range of materials with superior edge quality, eliminating the need for secondary finishing. Our optimized nesting software ensures maximum material utilization, reducing costs and lead times for high-volume production runs.",
    features: ["High-Precision Fiber Laser", "Burr-Free Clean Edges", "Rapid Prototyping Capabilities", "Advanced Nesting for Material Savings"],
  },
  {
    slug: "electrical-panel-boxes",
    title: "Electrical Panel Boxes",
    mainImage: "/images/sub-services/electrical-panel-boxes/epb_main.png",
    gallery: [
      "/images/sub-services/electrical-panel-boxes/epb_1.png",
      "/images/sub-services/electrical-panel-boxes/epb_2.png"
    ],
    description: "We design and manufacture robust, industrial-grade electrical panel boxes engineered for durability and safety. Our enclosures are built to protect critical components from environmental factors while ensuring easy access for maintenance and cable management, compliant with industrial standards.",
    features: ["Industrial-Grade Protection", "Optimized Cable Management", "Customizable Modular Designs", "Corrosion and Weather Resistant"],
  },
  {
    slug: "cnc-bending",
    title: "CNC Bending",
    mainImage: "/images/sub-services/cnc-bending/cnc_main.png",
    gallery: [
      "/images/sub-services/cnc-bending/cnc_1.png",
      "/images/sub-services/cnc-bending/cnc_2.png"
    ],
    description: "Utilizing high-tonnage CNC press brakes, we deliver precise, repeatable bends across varying thicknesses. Our equipment features multi-axis back-gauge systems that allow for the formation of complex, multi-angle components in a single setup, ensuring perfect consistency from the first piece to the last.",
    features: ["Multi-Axis Precision Bending", "High-Tonnage Hydraulic Force", "Repeatable Complex Geometries", "Tight Tolerance Compliance"],
  },
  {
    slug: "mig-welding",
    title: "MIG Welding",
    mainImage: "/images/sub-services/mig-welding/mig_main.png",
    gallery: [
      "/images/sub-services/mig-welding/mig_1.png",
      "/images/sub-services/mig-welding/mig_2.png"
    ],
    description: "Our MIG welding stations are equipped for high-deposition, high-strength assembly. Whether dealing with light-gauge sheet metal or heavy structural steel, our certified welders provide deep-penetration, gas-shielded welds that meet strict industrial standards for structural integrity and longevity.",
    features: ["Certified Structural Welding", "Deep Penetration Integrity", "High-Deposition Efficiency", "Automated Shielding Precision"],
  },
  {
    slug: "stamping-pressing",
    title: "Stamping / Pressing",
    mainImage: "/images/sub-services/stamping-pressing/sp_main.png",
    gallery: [
      "/images/sub-services/stamping-pressing/sp_1.png",
      "/images/sub-services/stamping-pressing/sp_2.png"
    ],
    description: "We provide high-speed mechanical and hydraulic pressing solutions for mass-produced components. Our stamping capabilities cover deep drawing, blanking, punching, and forming, allowing us to manufacture uniform, high-quality parts with extreme speed and cost-effectiveness for the automotive and appliance sectors.",
    features: ["High-Volume Production Efficiency", "Deep Drawing & Forming", "Precision Blanking & Punching", "Uniform Component Quality"],
  },
  {
    slug: "stainless-steel-laser-cutting",
    title: "Stainless Steel Laser Cutting",
    mainImage: "/images/sub-services/stainless-steel-laser-cutting/ss_main.png",
    gallery: [
      "/images/sub-services/stainless-steel-laser-cutting/ss_1.png",
      "/images/sub-services/stainless-steel-laser-cutting/ss_2.png"
    ],
    description: "Specialized nitrogen-assisted laser cutting ensures oxide-free, clean edges on all stainless steel grades. We prevent heat-affected zone discoloration and warping, making these parts immediately ready for assembly, welding, or aesthetic architectural applications.",
    features: ["Nitrogen-Assisted Clean Cutting", "Oxide-Free Finish", "Minimal Heat-Affected Zone", "Food-Grade Precision"],
  },
  {
    slug: "metal-sheet-laser-cutting",
    title: "Metal Sheet Laser Cutting",
    mainImage: "/images/sub-services/metal-sheet-laser-cutting/ms_main.png",
    gallery: [
      "/images/sub-services/metal-sheet-laser-cutting/ms_1.png",
      "/images/sub-services/metal-sheet-laser-cutting/ms_2.png"
    ],
    description: "We transform flat metal sheets into precise industrial components with sub-millimeter tolerances. Our laser systems handle diverse thicknesses, providing consistent performance for machine frames, electrical enclosures, and custom bracketry.",
    features: ["Sub-Millimeter Tolerances", "Versatile Thickness Handling", "Optimized Contour Accuracy", "High-Volume Scalability"],
  },
  {
    slug: "cnc-laser-cutting",
    title: "CNC Laser Cutting",
    mainImage: "/images/sub-services/cnc-laser-cutting/cl_main.png",
    gallery: [
      "/images/sub-services/cnc-laser-cutting/cl_1.png",
      "/images/sub-services/cnc-laser-cutting/cl_2.png"
    ],
    description: "Computer Numerical Control (CNC) integration allows us to execute complex CAD designs with absolute precision. Our CNC laser process is ideal for both custom one-off prototypes and sustained production, ensuring that every piece adheres strictly to your design specifications.",
    features: ["CAD-to-Part Direct Integration", "Absolute Dimensional Consistency", "High-Speed Dynamic Processing", "Automated Toolpath Efficiency"],
  },
  {
    slug: "brass-cutting",
    title: "Brass Cutting",
    mainImage: "/images/sub-services/brass-cutting/bc_main.png",
    gallery: [
      "/images/sub-services/brass-cutting/bc_1.png",
      "/images/sub-services/brass-cutting/bc_2.png"
    ],
    description: "Processing brass requires finesse to handle reflectivity and thermal conductivity. Our advanced laser systems are tuned specifically for non-ferrous metals, providing a smooth finish for decorative architectural elements, plumbing hardware, and precision electrical components.",
    features: ["Reflective Material Optimized", "High-Resolution Detailing", "Corrosion-Resistant Integrity", "Smooth Decorative Finish"],
  },
  {
    slug: "pipe-laser-cutting",
    title: "Pipe Laser Cutting",
    mainImage: "/images/sub-services/pipe-laser-cutting/pl_main.png",
    gallery: [
      "/images/sub-services/pipe-laser-cutting/pl_1.png",
      "/images/sub-services/pipe-laser-cutting/pl_2.png"
    ],
    description: "Equipped with rotary axis technology, we cut circular, square, and rectangular profiles with ease. This service allows for complex joints, notches, and slots on tubular structures, streamlining assembly by ensuring that pipes fit perfectly without manual grinding.",
    features: ["Rotary Axis Tube Processing", "Complex Joint Notching", "Automated Profile Feeding", "Seamless Assembly Fit"],
  },
  {
    slug: "ss-filter-plate-cuttings",
    title: "SS Filter Plate Cuttings",
    mainImage: "/images/sub-services/ss-filter-plate-cuttings/ss_main.png",
    gallery: [
      "/images/sub-services/ss-filter-plate-cuttings/ss_1.png",
      "/images/sub-services/ss-filter-plate-cuttings/ss_2.png"
    ],
    description: "We manufacture high-performance filter plates using precision laser perforation. By controlling laser pulse duration, we create clean, consistent apertures that improve filtration flow rates while maintaining the structural rigidity of the stainless steel substrate.",
    features: ["Precision Micro-Perforation", "Optimized Flow-Rate Control", "High-Rigidity Substrate", "Chemical-Resistant Processing"],
  },
  {
    slug: "metal-fabrication",
    title: "Metal Fabrication",
    mainImage: "/images/sub-services/metal-fabrication/m_fab_main.png",
    gallery: [
      "/images/sub-services/metal-fabrication/m_fab_1.png",
      "/images/sub-services/metal-fabrication/m_fab_2.png"
    ],
    description: "Our full-service fabrication shop acts as a one-stop-shop for your engineering needs. From initial concept and design optimization to cutting, bending, welding, and final assembly, we provide turnkey metal solutions for heavy industrial and commercial projects.",
    features: ["Turnkey Manufacturing Process", "End-to-End Project Management", "Diverse Material Processing", "Large-Scale Assembly"],
  },
  {
    slug: "powder-coatings",
    title: "Powder Coatings",
    mainImage: "/images/sub-services/powder-coatings/pc_main.png",
    gallery: [
      "/images/sub-services/powder-coatings/pc_1.png",
      "/images/sub-services/powder-coatings/pc_2.png"
    ],
    description: "We provide high-quality powder coating services that offer a durable, long-lasting finish for industrial and commercial metal components. Our specialized process ensures superior resistance to corrosion, heat, and impact, providing both aesthetic appeal and enhanced product longevity.",
    features: ["Corrosion-Resistant Finish", "Environmentally Friendly Process", "Wide Range of Color & Texture Options", "Uniform Coverage for Complex Geometries"],
  },
  {
    slug: "aluminum-laser-cutting",
    title: "Aluminum Laser Cutting",
    mainImage: "/images/sub-services/aluminum-laser-cutting/al_main.png",
    gallery: [
      "/images/sub-services/aluminum-laser-cutting/al_1.png",
      "/images/sub-services/aluminum-laser-cutting/al2.png"
    ],
    description: "Aluminum is lightweight and thermally conductive. We use specialized laser power settings to cut aluminum without dross or burrs. This makes it an ideal process for aerospace parts, heat sinks, and high-strength automotive frames where weight reduction is critical.",
    features: ["Dross-Free Aluminum Cutting", "Heat-Sink Performance Optimization", "Weight-to-Strength Efficiency", "High-Grade Alloy Versatility"],
  },

  {
    slug: "ss-jali-laser-cutting",
    title: "MS/SS Jali Laser Cutting",
    mainImage: "/images/sub-services/ss-jali-laser-cutting/ss_main.png",
    gallery: [
      "/images/sub-services/ss-jali-laser-cutting/ss_1.png",
      "/images/sub-services/ss-jali-laser-cutting/ss_2.png"
    ],
    description: "Our premium stainless steel jali services offer the ultimate combination of elegance and durability. These pieces are ideal for high-end residential and commercial projects where the metal must resist weather and corrosion while maintaining a high-polish, luxurious appearance.",
    features: ["Weather & Corrosion Resistant", "Luxury Aesthetic Finish", "Architectural-Grade Precision", "Enduring Structural Quality"],
  },
];

export default serviceDetails;