import Hero from "@/components/home/Hero";

import About from "@/components/home/About";
import Facilities from "@/components/home/Facilities";

//import KeyCapabilities from "@/components/home/KeyCapabilities";

import Services from "@/components/home/Services";


import WhyChooseUs from "@/components/home/WhyChooseUs";
import CompletedProjects from "@/components/home/CompletedProjects";

import Industries from "@/components/home/Industries";



import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <About />
        <Facilities />


        <Services />
<WhyChooseUs />
   

        <CompletedProjects />

        <Industries />

        

        <Clients />
      </main>
    </>
  );
}