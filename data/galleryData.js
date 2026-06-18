const galleryData = [
  // Laser Cutting
  { id: 1, category: "Laser Cutting", image: "/images/sub-services/laser-cutting/lc_main.png" },
  { id: 2, category: "Laser Cutting", image: "/images/sub-services/laser-cutting/lc_1.png" },
  { id: 3, category: "Laser Cutting", image: "/images/sub-services/laser-cutting/lc_2.png" },
  
  // Electrical Panel Boxes
  { id: 4, category: "Electrical Panel Boxes", image: "/images/sub-services/electrical-panel-boxes/epb_main.png" },
  { id: 5, category: "Electrical Panel Boxes", image: "/images/sub-services/electrical-panel-boxes/epb_1.png" },
  { id: 6, category: "Electrical Panel Boxes", image: "/images/sub-services/electrical-panel-boxes/epb_2.png" },

  // CNC Bending
  { id: 7, category: "CNC Bending", image: "/images/sub-services/cnc-bending/cnc_main.png" },
  { id: 8, category: "CNC Bending", image: "/images/sub-services/cnc-bending/cnc_1.png" },
  { id: 9, category: "CNC Bending", image: "/images/sub-services/cnc-bending/cnc_2.png" },

  // MIG Welding
  { id: 10, category: "MIG Welding", image: "/images/sub-services/mig-welding/mig_main.png" },
  { id: 11, category: "MIG Welding", image: "/images/sub-services/mig-welding/mig_1.png" },
  { id: 12, category: "MIG Welding", image: "/images/sub-services/mig-welding/mig_2.png" },

  // Stamping / Pressing
  { id: 13, category: "Stamping / Pressing", image: "/images/sub-services/stamping-pressing/sp_main.png" },
  { id: 14, category: "Stamping / Pressing", image: "/images/sub-services/stamping-pressing/sp_1.png" },
  { id: 15, category: "Stamping / Pressing", image: "/images/sub-services/stamping-pressing/sp_2.png" },

  // Stainless Steel Laser Cutting
  { id: 16, category: "Stainless Steel Laser Cutting", image: "/images/sub-services/stainless-steel-laser-cutting/ss_main.png" },
  { id: 17, category: "Stainless Steel Laser Cutting", image: "/images/sub-services/stainless-steel-laser-cutting/ss_1.png" },
  { id: 18, category: "Stainless Steel Laser Cutting", image: "/images/sub-services/stainless-steel-laser-cutting/ss_2.png" },

  // Metal Sheet Laser Cutting
  { id: 19, category: "Metal Sheet Laser Cutting", image: "/images/sub-services/metal-sheet-laser-cutting/ms_main.png" },
  { id: 20, category: "Metal Sheet Laser Cutting", image: "/images/sub-services/metal-sheet-laser-cutting/ms_1.png" },
  { id: 21, category: "Metal Sheet Laser Cutting", image: "/images/sub-services/metal-sheet-laser-cutting/ms_2.png" },

  // CNC Laser Cutting
  { id: 22, category: "CNC Laser Cutting", image: "/images/sub-services/cnc-laser-cutting/cl_main.png" },
  { id: 23, category: "CNC Laser Cutting", image: "/images/sub-services/cnc-laser-cutting/cl_1.png" },
  { id: 24, category: "CNC Laser Cutting", image: "/images/sub-services/cnc-laser-cutting/cl_2.png" },

  // Brass Cutting
  { id: 25, category: "Brass Cutting", image: "/images/sub-services/brass-cutting/bc_main.png" },
  { id: 26, category: "Brass Cutting", image: "/images/sub-services/brass-cutting/bc_1.png" },
  { id: 27, category: "Brass Cutting", image: "/images/sub-services/brass-cutting/bc_2.png" },

  // Pipe Laser Cutting
  { id: 28, category: "Pipe Laser Cutting", image: "/images/sub-services/pipe-laser-cutting/pl_main.png" },
  { id: 29, category: "Pipe Laser Cutting", image: "/images/sub-services/pipe-laser-cutting/pl_1.png" },
  { id: 30, category: "Pipe Laser Cutting", image: "/images/sub-services/pipe-laser-cutting/pl_2.png" },

  // SS Filter Plate Cuttings
  { id: 31, category: "SS Filter Plate Cuttings", image: "/images/sub-services/ss-filter-plate-cuttings/ss_main.png" },
  { id: 32, category: "SS Filter Plate Cuttings", image: "/images/sub-services/ss-filter-plate-cuttings/ss_1.png" },
  { id: 33, category: "SS Filter Plate Cuttings", image: "/images/sub-services/ss-filter-plate-cuttings/ss_2.png" },

  // Metal Fabrication
  { id: 34, category: "Metal Fabrication", image: "/images/sub-services/metal-fabrication/m_fab_main.png" },
  { id: 35, category: "Metal Fabrication", image: "/images/sub-services/metal-fabrication/m_fab_1.png" },
  { id: 36, category: "Metal Fabrication", image: "/images/sub-services/metal-fabrication/m_fab_2.png" },

  // Powder Coatings
  { id: 37, category: "Powder Coatings", image: "/images/sub-services/powder-coatings/pc_main.png" },
  { id: 38, category: "Powder Coatings", image: "/images/sub-services/powder-coatings/pc_1.png" },
  { id: 39, category: "Powder Coatings", image: "/images/sub-services/powder-coatings/pc_2.png" },

  // Aluminum Laser Cutting
  { id: 40, category: "Aluminum Laser Cutting", image: "/images/sub-services/aluminum-laser-cutting/al_main.png" },
  { id: 41, category: "Aluminum Laser Cutting", image: "/images/sub-services/aluminum-laser-cutting/al_1.png" },
  { id: 42, category: "Aluminum Laser Cutting", image: "/images/sub-services/aluminum-laser-cutting/al_2.png" },

  // Metal Jali Laser Cutting
  { id: 43, category: "Metal Jali Laser Cutting", image: "/images/sub-services/metal-jali-laser-cutting/mj_main.png" },
  { id: 44, category: "Metal Jali Laser Cutting", image: "/images/sub-services/metal-jali-laser-cutting/mj_1.png" },
  { id: 45, category: "Metal Jali Laser Cutting", image: "/images/sub-services/metal-jali-laser-cutting/mj_2.png" },

  // SS Jali Laser Cutting
  { id: 46, category: "SS Jali Laser Cutting", image: "/images/sub-services/ss-jali-laser-cutting/ss_main.png" },
  { id: 47, category: "SS Jali Laser Cutting", image: "/images/sub-services/ss-jali-laser-cutting/ss_1.png" },
  { id: 48, category: "SS Jali Laser Cutting", image: "/images/sub-services/ss-jali-laser-cutting/ss_2.png" }
];

export default galleryData;