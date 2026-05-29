import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "IDROSHAZLI | Pronto Intervento Idraulico a Milano",
  description: "Servizi di idraulica, gas, climatizzazione e ristrutturazioni a Milano. Qualità premium 24/7.",
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
      </body>
    </html>
  );
}
