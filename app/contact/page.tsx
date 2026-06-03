import ContactHero from "@/components/contact/ContactHero";
import ContactFormInfo from "@/components/contact/ContactFormInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <ContactHero />
      <ContactFormInfo />
      <ContactMap />
    </main>
  );
}