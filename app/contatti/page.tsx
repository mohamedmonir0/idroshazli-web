"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contatti() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 font-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl text-brand-navy mb-16 uppercase text-center tracking-tighter">CONTATTI</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* الجانب الأيسر: طرق التواصل */}
          <div className="space-y-6">
            
            {/* رقم التليفون */}
            <div className="flex items-center gap-6 bg-gray-50 p-8 rounded-[2.5rem]">
              <div className="bg-brand-orange p-4 rounded-2xl text-white"><Phone size={30} fill="white" /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Chiamaci ora</p>
                <a href="tel:+393896616549" className="text-2xl text-brand-navy hover:text-brand-orange transition-colors">
                  +39 389 661 6549
                </a>
              </div>
            </div>

            {/* الإيميل (الجديد) */}
            <div className="flex items-center gap-6 bg-gray-50 p-8 rounded-[2.5rem]">
              <div className="bg-brand-sky p-4 rounded-2xl text-white"><Mail size={30} /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                <a href="mailto:info@idroshazli.it" className="text-xl text-brand-navy hover:text-brand-orange transition-colors">
                  info@idroshazli.it
                </a>
              </div>
            </div>

            {/* العنوان */}
            <div className="flex items-center gap-6 bg-gray-50 p-8 rounded-[2.5rem]">
              <div className="bg-brand-navy p-4 rounded-2xl text-white"><MapPin size={30} /></div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Sede Legale</p>
                <p className="text-lg text-brand-navy italic">Via Giuseppe Sercognani 19, Milano</p>
              </div>
            </div>

          </div>

          {/* الجانب الأيمن: التوافر */}
          <div className="bg-brand-orange rounded-[3rem] p-12 text-white shadow-2xl h-fit">
            <h3 className="text-3xl mb-6 italic">Disponibili 24/7</h3>
            <p className="text-white/80 mb-8 font-medium">Siamo pronti ad intervenire per qualsiasi emergenza o preventivo gratuito.</p>
            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl">
              <Clock />
              <span>Sempre attivi, anche i festivi.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
