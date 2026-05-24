import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
// استدعاء الفورم من مكانه الجديد
import EmergencyForm from "@/components/sections/EmergencyForm"; 

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />

      {/* الفورم الجديد شغال هنا */}
      <EmergencyForm />
    </main>
  );
}
