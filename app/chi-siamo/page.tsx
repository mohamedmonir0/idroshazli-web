"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Trophy, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-brand-navy mb-6 uppercase">Chi <span className="text-brand-orange">Siamo</span></h1>
          <p className="text-xl text-gray-500 italic leading-relaxed">
            Idroshazli è il punto di riferimento a Milano per l'idraulica e le ristrutturazioni. 
            Professionalità, trasparenza e rapidità sono i nostri pilastri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="p-8 bg-gray-50 rounded-[2.5rem]">
            <Trophy className="mx-auto text-brand-orange mb-4" size={40} />
            <h4 className="font-black text-brand-navy mb-2">ESPERIENZA</h4>
            <p className="text-xs text-gray-500 font-medium">Anni di lavoro sul campo a Milano e provincia.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-[2.5rem]">
            <ShieldCheck className="mx-auto text-brand-orange mb-4" size={40} />
            <h4 className="font-black text-brand-navy mb-2">QUALITÀ</h4>
            <p className="text-xs text-gray-500 font-medium">Utilizziamo solo i migliori materiali certificati.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-[2.5rem]">
            <Users className="mx-auto text-brand-orange mb-4" size={40} />
            <h4 className="font-black text-brand-navy mb-2">FIDUCIA</h4>
            <p className="text-xs text-gray-500 font-medium">Migliaia di clienti soddisfatti e lavori garantiti.</p>
          </div>
        </div>

        <div className="bg-brand-navy text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl font-black mb-6 italic">La nostra missione</h2>
          <p className="text-gray-300 leading-relaxed italic">
            "Fornire un servizio idraulico di eccellenza, risolvendo ogni emergenza in tempi record e trasformando le case dei nostri clienti con ristrutturazioni di lusso e impianti a norma."
          </p>
        </div>
      </div>
    </div>
  );
}
