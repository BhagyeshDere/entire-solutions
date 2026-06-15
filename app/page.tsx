import Hero from "@/components/home/Hero";

import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Facilities from "@/components/home/Facilities";

//import KeyCapabilities from "@/components/home/KeyCapabilities";

import Services from "@/components/home/Services";


import WhyChooseUs from "@/components/home/WhyChooseUs";


import Industriesnew from "@/components/home/Industriesnew";



import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <About />
     
<Facilities/>

        <Services />
<Stats />
        
<WhyChooseUs />
        <Industriesnew />
      
        <Clients />
        
   
      </main>
    </>
  );
}