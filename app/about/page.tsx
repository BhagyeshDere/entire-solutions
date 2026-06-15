import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import VisionMission from "@/components/about/VisionMission";
import AboutCertifications from "@/components/about/AboutCertifications"; // Capitalized

import KeyCapabilities from "@/components/about/KeyCapabilities";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <AboutCertifications /> {/* Now correctly recognized as a component */}
  
       <KeyCapabilities />
      <CTASection />
    </main>
  );
}