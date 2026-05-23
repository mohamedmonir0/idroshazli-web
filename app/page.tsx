import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar"; // القسم الجديد
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <ContactSection />
    </main>
  );
}
