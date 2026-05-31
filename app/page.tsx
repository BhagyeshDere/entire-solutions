import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <About />

        <Services />

        <Industries />

        <WhyChooseUs />

        <Clients />
      </main>
    </>
  );
}