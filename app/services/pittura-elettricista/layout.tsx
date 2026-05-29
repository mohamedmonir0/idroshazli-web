import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pittura e Elettricista Milano | Rifiniture e Impianti | Idroshazli",
  description:
    "Servizi di pittura ed elettricista a Milano per interni ed esterni. Tinteggiatura professionale, impianti elettrici, decorazioni, riparazioni e pronto intervento.",
  alternates: {
    canonical: "https://www.idroshazli.it/services/pittura-elettricista",
  },
};

export default function PitturaElettricistaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
