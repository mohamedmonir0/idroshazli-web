"use client";
import { Clock, ShieldCheck, Euro } from "lucide-react";

export default function TrustBar() {
  const features = [
  { icon: <ShieldCheck className="text-brand-sky" />, text: "Certificato F-Gas", desc: "Climatizzazione Professionale" },
  { icon: <ShieldCheck className="text-brand-orange" />, text: "Abilitazione Gas", desc: "Sicurezza Impianti (DM 37/08)" },
  { icon: <Clock className="text-brand-sky" />, text: "Disponibili 24/7", desc: "Pronto Intervento Milano" },
];

  return (
    <div className="relative z-20 -mt-12 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-center justify-center gap-4 px-8 py-4">
            <div className="p-3 bg-brand-sky/10 rounded-2xl">
              {f.icon}
            </div>
            <div>
              <p className="font-black text-brand-navy leading-none">{f.text}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
