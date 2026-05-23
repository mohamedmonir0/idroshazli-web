"use client";
import { motion } from "framer-motion";
import { Bath, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function RistrutturazioniPage() {
  const steps = [
    { t: "Smaltimento", d: "Rimozione macerie." },
    { t: "Nuovi Impianti", d: "Tubazioni a norma." },
    { t: "Rivestimenti", d: "Posa professionale." },
    { t: "Finiture", d: "Montaggio sanitari." }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-navy mb-10 font-black uppercase italic">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* نصوص التشطيبات */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight uppercase">
              RISTRUTTURA<span className="text-brand-orange">ZIONI</span> <br/> BAGNO
            </h1>
            <p className="text-lg text-gray-500 italic border-l-4 border-brand-orange pl-4">
              Trasformiamo il tuo vecchio bagno con un servizio "Chiavi in Mano" garantito.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {steps.map((item, i) => (
                <div key={i} className="bg-gray-50 p-5 rounded-3xl border border-gray-100">
                  <CheckCircle2 className="text-brand-orange mb-2" size={20} />
                  <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest">{item.t}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* الصورة وبوكس الاتصال */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img src="/images/service4.jpg" className="w-full h-80 lg:h-[400px] object-cover" alt="Ristrutturazione" />
            </div>
            <div className="bg-brand-navy rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
               <Bath className="absolute -top-6 -right-6 opacity-10" size={100} />
               <h3 className="text-2xl font-black mb-4 italic leading-tight">Preventivo Gratuito?</h3>
               <a href="tel:+391234567890" className="flex items-center justify-center gap-4 bg-brand-orange p-5 rounded-2xl font-black text-xl hover:scale-105 transition-all">
                  <Phone fill="white" size={24} /> <span>CHIAMACI ORA</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
