import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "IDROSHAZLI | Pronto Intervento Idraulico a Milano",
  description: "Pronto intervento idraulico Milano 24/7. Riparazione caldaie, condizionatori, ricerca perdite d'acqua, impianti gas e ristrutturazioni bagni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        {/* شريط التنقل العلوي */}
        <Navbar />

        {/* زرار الواتساب الطاير - هيظهر في كل الصفحات */}
        <WhatsAppButton />

        {/* محتوى الصفحة الرئيسي */}
        <main className="flex-grow">
          {children}
        </main>

        {/* تذييل الصفحة */}
        <Footer />

        {/* كود الـ Schema الـ God Mode الخاص بالسيو المحلي */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "Idroshazli - Pronto Intervento Idraulico Milano",
              "description": "Pronto intervento idraulico Milano 24/7. Riparazione caldaie, condizionatori, ricerca perdite d'acqua, impianti gas e ristrutturazioni bagni.",
              "image": "https://www.idroshazli.it/icon.jpg",
              "telephone": "+393896616549",
              "url": "https://www.idroshazli.it",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Milano",
                "addressRegion": "Lombardia",
                "addressCountry": "IT"
              },
              "priceRange": "€€",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
