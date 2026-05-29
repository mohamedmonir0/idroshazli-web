import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pronto Intervento Idraulico Milano 24 Ore | Idroshazli",
  description:
    "Emergenza idraulico a Milano e provincia. Riparazione perdite d'acqua urgenti, spurgo lavandini e WC intasati. Intervento rapido entro 30 minuti.",
  alternates: {
    canonical: "https://www.idroshazli.it/services/emergenza",
  },
};

export default function EmergenzaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
