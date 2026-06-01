import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import PageLoader from "@/components/common/PageLoader";

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
        <PageLoader>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

          <WhatsAppButton />

        </PageLoader>
      </body>
    </html>
  );
}