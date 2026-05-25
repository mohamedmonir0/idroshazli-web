"use client";
import { motion } from "framer-motion";
import { Flame, FileCheck, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GasRiscaldamentoPage() {
  const services = [
    { t: "Bollino Blu", d: "Certificazione obbligatoria per caldaie." },
    { t: "Manutenzione", d: "Controllo fumi e pulizia ordinaria." },
    { t: "Installazione", d: "Montaggio nuove caldaie certificate." }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange mb-8 md:mb-10 font-black uppercase italic hover:gap-4 transition-all text-sm md:text-base">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-navy leading-none md:leading-[0.9] uppercase tracking-tighter mb-6 break-words">
                IMPIANTI <span className="text-brand-orange text-glow">GAS</span> <br/>
                & RISCALDAMENTO
              </h1>
              <p className="text-base sm:text-xl text-gray-500 italic leading-relaxed max-w-lg border-l-4 border-brand-orange pl-4">
                Sicurezza e risparmio energetico certificato. Tecnici abilitati per interventi rapidi a Milano.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((item, i) => (
                <div key={i} className="flex items-start sm:items-center gap-4 sm:gap-5 bg-gray-50 p-5 md:p-6 rounded-3xl md:rounded-[2.5rem] border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-orange shrink-0">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy uppercase text-lg">{item.t}</h4>
                    <p className="text-sm text-gray-500 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-[12px] border-gray-50 h-72 sm:h-80 lg:h-[450px]">
              <img 
                src="/images/service5.jpg" 
                alt="Impianti Gas Milano" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-brand-navy rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                <Flame size={100} />
              </div>
              <h3 className="text-2xl font-black mb-2 italic">Hai un&apos;urgenza?</h3>
              <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest font-bold">Interveniamo subito</p>
              <a href="tel:+393896616549" className="flex items-center justify-center gap-3 md:gap-4 bg-brand-orange p-4 md:p-6 rounded-2xl font-black text-lg md:text-2xl hover:scale-105 transition-all shadow-xl">
                <Phone fill="white" size={24} /> 
                <span>CHIAMA ORA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
