import Hero from "@/components/home/Hero";

import About from "@/components/home/About";

import KeyCapabilities from "@/components/home/KeyCapabilities";

import Services from "@/components/home/Services";

import Facilities from "@/components/home/Facilities";

import CompletedProjects from "@/components/home/CompletedProjects";

import Industries from "@/components/home/Industries";

import WhyChooseUs from "@/components/home/WhyChooseUs";

import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <About />

        <KeyCapabilities />

        <Services />

        <Facilities />

        <CompletedProjects />

        <Industries />

        <WhyChooseUs />

        <Clients />
      </main>
    </>
  );
}