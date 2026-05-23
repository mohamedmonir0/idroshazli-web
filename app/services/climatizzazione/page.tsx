"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Phone, ArrowLeft, Snowflake } from "lucide-react";
import Link from "next/link";

export default function ClimatizzazionePage() {
  const features = [
    { t: "Certificazione F-Gas", d: "Tecnici abilitati al rilascio del libretto d'impianto." },
    { t: "Ricarica Gas", d: "Ricarica rapida gas refrigerante R32 e R410A." },
    { t: "Sanificazione", d: "Pulizia profonda filtri e igienizzazione antibatterica." }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-sky mb-10 font-black uppercase italic hover:gap-4 transition-all">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
        
        {/* التعديل الجوهري هنا في الـ Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* الجانب الأيسر: نصوص واضحة */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-black text-brand-navy leading-tight uppercase tracking-tighter">
              CLIMA<span className="text-brand-sky">TIZZAZIONE</span> <br/> & F-GAS
            </h1>
            <p className="text-lg text-gray-500 italic border-l-4 border-brand-sky pl-4">
              Il massimo del comfort termico a Milano. Installazioni certificate e manutenzione rapida.
            </p>
            <div className="space-y-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                  <div className="bg-brand-sky p-3 rounded-xl text-white shrink-0"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-brand-navy uppercase">{item.t}</h4>
                    <p className="text-sm text-gray-500 leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيمن: الصورة وبوكس الاتصال (مرصوصين فوق بعض مش فوق الكلام) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img src="/images/service3.jpg" className="w-full h-80 lg:h-[400px] object-cover" alt="Service" />
            </div>
            <div className="bg-brand-navy rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
               <Snowflake className="absolute -top-6 -right-6 opacity-10 text-brand-sky" size={100} />
               <h3 className="text-2xl font-black mb-4 italic leading-tight">Sopralluogo Gratuito?</h3>
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
