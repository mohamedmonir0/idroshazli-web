"use client";
import { motion } from "framer-motion";
import { Phone, Clock, ShieldCheck, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProntoInterventoPage() {
  const points = ["Arrivo in 30 min", "Ricerca perdite", "Sblocco scarichi", "24/7 Festivi"];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-sky mb-8 font-black uppercase italic">
          <ArrowLeft size={20} /> Torna alla Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-6xl font-black text-brand-navy mb-6 leading-none">PRONTO <br/><span className="text-brand-orange">INTERVENTO</span></h1>
            <p className="text-xl text-gray-500 italic mb-8">Emergenza idraulica a Milano? Siamo da te in 30 minuti.</p>
            <div className="grid grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                  <span className="font-bold text-sm text-brand-navy">{p}</span>
                </div>
              ))}
            </div>
          </div>
          {/* الصورة هنا */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
            <img src="/images/service1.webp" className="w-full h-full object-cover" alt="Emergenza" />
          </div>
        </div>

        {/* بوكس الاتصال الكبير */}
        <div className="bg-brand-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl font-black mb-6">Hai un'urgenza ora?</h2>
          <a href="tel:+391234567890" className="inline-flex items-center gap-4 bg-brand-orange px-12 py-6 rounded-2xl font-black text-3xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(244,121,32,0.3)]">
            <Phone fill="white" size={32} /> CHIAMACI ORA
          </a>
        </div>
      </div>
    </div>
  );
}
