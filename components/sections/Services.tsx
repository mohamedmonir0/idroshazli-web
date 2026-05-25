"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Wind, Thermometer, Hammer, Paintbrush } from "lucide-react";

const services = [
  { title: "Pronto Intervento 24/7", image: "/images/service1.webp", slug: "emergenza", icon: <Droplets /> },
  { title: "Impianti Gas & Riscaldamento", image: "/images/service5.jpg", slug: "gas-riscaldamento", icon: <Thermometer /> },
  { title: "Climatizzazione & F-Gas", image: "/images/service3.jpg", slug: "climatizzazione", icon: <Wind /> },
  { title: "Ristrutturazioni Bagno", image: "/images/service10.jpg", slug: "ristrutturazioni", icon: <Hammer /> },
  { title: "Pittura & Impianti Elettrici", image: "/images/service13.jpg", slug: "pittura-elettricista", icon: <Paintbrush /> }
];

export default function Services() {
  return (
    <section id="servizi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-10 md:mb-16 uppercase italic leading-tight">
          I Nostri Servizi <span className="text-brand-sky">Specializzati</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <Link href={`/services/${s.slug}`} key={i} className="group h-full">
              <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl md:rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col cursor-pointer">
                <div className="h-52 md:h-48 overflow-hidden">
                  <img src={s.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={s.title} />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <h3 className="text-sm font-bold text-brand-navy leading-tight">{s.title}</h3>
                  <span className="text-brand-orange text-[10px] font-black mt-3 block uppercase">Vedi Dettagli</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
