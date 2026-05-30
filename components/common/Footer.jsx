import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-slate-950 to-sky-950/30"></div>

      <div className="relative z-10">

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-4 gap-12">

            {/* Company Info */}
            <div className="lg:col-span-2">

              <Image
                src="/logo.png"
                alt="Entire Solutions"
                width={220}
                height={80}
                className="object-contain"
              />

              <p className="mt-6 text-slate-300 leading-7 max-w-lg">
                Entire Solutions specializes in Light & Heavy Fabrication,
                Laser Cutting, Sheet Metal Processing, Electrical Panel
                Manufacturing, Powder Coating, and Renewable Energy
                Equipment Fabrication.
              </p>

              <div className="mt-6">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-sky-500 text-sm font-semibold">
                  ISO 9001:2015 Certified
                </span>
              </div>

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="text-xl font-bold mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-slate-300">

                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#products" className="hover:text-white transition">
                    Products
                  </a>
                </li>

                <li>
                  <a href="#clients" className="hover:text-white transition">
                    Clients
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* Contact */}
            <div>

              <h3 className="text-xl font-bold mb-5">
                Contact Info
              </h3>

              <div className="space-y-4 text-slate-300">

                <p>
                  📞 7020493239
                </p>

                <p>
                  📞 9222089025
                </p>

                <p>
                  ✉️ marketing@entiresolutions.co.in
                </p>

                <p>
                  GST: 27AAIFE3965C1ZG
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Entire Solutions. All Rights Reserved.
            </p>

            <p className="text-sm text-slate-400">
              Developed by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent font-semibold">
                Qiro Tech Innovation Pvt. Ltd.
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}