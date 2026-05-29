import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ristrutturazione Bagno Milano Chiavi in Mano | Idroshazli",
  description:
    "Ristrutturazione bagno a Milano chiavi in mano. Smaltimento, nuovi impianti, rivestimenti e finiture con preventivo gratuito e lavorazioni professionali.",
  alternates: {
    canonical: "https://www.idroshazli.it/services/ristrutturazioni",
  },
};

export default function RistrutturazioniLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
