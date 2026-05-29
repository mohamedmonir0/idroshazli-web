import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riparazione e Installazione Condizionatori Milano | Idroshazli",
  description:
    "Assistenza e riparazione condizionatori a Milano. Installazione impianti di climatizzazione, ricarica gas condizionatore e pronto intervento rapido 24/7.",
  alternates: {
    canonical: "https://www.idroshazli.it/services/climatizzazione",
  },
};

export default function ClimatizzazioneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
