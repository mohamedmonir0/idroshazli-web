"use client";
import { motion } from "framer-motion";
import { Paintbrush, Zap, Phone, ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function PitturaElettricistaPage() {
  const features = [
    { t: "Tinteggiatura", d: "Pittura professionale per interni ed esterni con materiali bio." },
    { t: "Impianti Elettrici", d: "Installazione, manutenzione e certificazione impianti a norma." },
    { t: "Decorazioni", d: "Effetti decorativi moderni, cartongesso e illuminazione LED." },
    { t: "Riparazioni", d: "Ricerca guasti elettrici e pronto intervento rapido." }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-orange mb-10 font-black uppercase italic hover:gap-4 transition-all">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* الجانب الأيسر: نصوص وخدمات */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight uppercase tracking-tighter">
              PITTURA & <br/> <span className="text-brand-orange">ELETTRICITÀ</span>
            </h1>
            <p className="text-lg text-gray-500 italic border-l-4 border-brand-orange pl-4">
              Diamo colore e luce alla tua casa. Interventi professionali per rifiniture di alta qualità a Milano.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="text-brand-orange mb-3">
                    {i % 2 === 0 ? <Paintbrush size={24} /> : <Zap size={24} />}
                  </div>
                  <h4 className="font-black text-brand-navy uppercase text-xs mb-1">{item.t}</h4>
                  <p className="text-[11px] text-gray-500 leading-tight font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيمن: الصورة وبوكس الاتصال */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 h-[400px]">
              <img 
                src="/images/service13.jpg" 
                className="w-full h-full object-cover" 
                alt="Pittura ed Elettricità" 
              />
            </div>
            
            <div className="bg-brand-navy rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                <Lightbulb size={100} />
              </div>
              <h3 className="text-2xl font-black mb-2 italic">Preventivo Gratuito?</h3>
              <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest font-bold italic">Rinnoviamo i tuoi ambienti</p>
              <a href="tel:+391234567890" className="flex items-center justify-center gap-4 bg-brand-orange p-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-xl">
                <Phone fill="white" size={24} /> 
                <span>CHIAMACI ORA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
