import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
// استدعاء الفورم من مكانه الجديد
import EmergencyForm from "@/components/sections/EmergencyForm"; 

export const metadata: Metadata = {
  title: "Idraulico Milano | Pronto Intervento 24/7 | Idroshazli",
  description:
    "Idraulico professionista a Milano. Pronto intervento rapido 24 ore su 24 per perdite d'acqua, riparazione caldaie, climatizzazione e ristrutturazioni. Prezzi onesti e preventivi gratuiti.",
  alternates: {
    canonical: "https://www.idroshazli.it",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    name: "Idroshazli - Pronto Intervento Idraulico Milano",
    image: "https://www.idroshazli.it/images/logo.png",
    "@id": "https://www.idroshazli.it",
    url: "https://www.idroshazli.it",
    telephone: "+393896616549",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Milano",
      addressLocality: "Milano",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4642,
      longitude: 9.19,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />

      {/* الفورم الجديد شغال هنا */}
      <EmergencyForm />
    </main>
  );
}
