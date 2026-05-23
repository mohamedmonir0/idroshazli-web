"use client";
import { motion } from "framer-motion";
import { Flame, FileCheck, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GasRiscaldamentoPage() {
  const services = [
    { t: "Bollino Blu", d: "Certificazione obbligatoria per caldaie." },
    { t: "Manutenzione", d: "Controllo fumi e pulizia ordinaria." },
    { t: "Installazione", d: "Montaggio nuove caldaie certificate." }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* زرار الرجوع */}
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange mb-10 font-black uppercase italic hover:gap-4 transition-all">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* الجانب الأيسر: النصوص والخدمات */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-navy leading-[0.9] uppercase tracking-tighter mb-6">
                IMPIANTI <span className="text-brand-orange text-glow">GAS</span> <br/>
                & RISCALDAMENTO
              </h1>
              <p className="text-xl text-gray-500 italic leading-relaxed max-w-lg border-l-4 border-brand-orange pl-4">
                Sicurezza e risparmio energetico certificato. Tecnici abilitati per interventi rapidi a Milano.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((item, i) => (
                <div key={i} className="flex items-center gap-5 bg-gray-50 p-6 rounded-[2.5rem] border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-orange">
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

          {/* الجانب الأيمن: الصورة وبوكس الاتصال المنفصل */}
          <div className="space-y-8">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-gray-50 h-[450px]">
              <img 
                src="/images/service5.jpg" 
                alt="Impianti Gas Milano" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* بوكس الاتصال بقى تحت الصورة بشكل شيك ومريح */}
            <div className="bg-brand-navy rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                <Flame size={100} />
              </div>
              <h3 className="text-2xl font-black mb-2 italic">Hai un'urgenza?</h3>
              <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest font-bold">Interveniamo subito</p>
              <a href="tel:+391234567890" className="flex items-center justify-center gap-4 bg-brand-orange p-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-xl">
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
