import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impianti Gas e Riscaldamento Milano | Caldaie e Bollino Blu | Idroshazli",
  description:
    "Assistenza per impianti gas e riscaldamento a Milano. Manutenzione caldaie, controllo fumi, certificazione Bollino Blu e installazione caldaie certificate.",
  alternates: {
    canonical: "https://www.idroshazli.it/services/gas-riscaldamento",
  },
};

export default function GasRiscaldamentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
