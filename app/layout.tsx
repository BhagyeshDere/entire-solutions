import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Entire Solutions",
  description: "Manufacturing & Fabrication Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}