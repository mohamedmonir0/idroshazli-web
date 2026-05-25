"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contatti() {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-32 pb-16 md:pb-20 font-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-brand-navy mb-10 md:mb-16 uppercase text-center tracking-tighter leading-none">CONTATTI</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-gray-50 p-5 sm:p-8 rounded-3xl md:rounded-[2.5rem]">
              <div className="bg-brand-orange p-4 rounded-2xl text-white w-fit"><Phone size={30} fill="white" /></div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Chiamaci ora</p>
                <a href="tel:+393896616549" className="text-xl sm:text-2xl text-brand-navy hover:text-brand-orange transition-colors break-words">
                  +39 389 661 6549
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-gray-50 p-5 sm:p-8 rounded-3xl md:rounded-[2.5rem]">
              <div className="bg-brand-sky p-4 rounded-2xl text-white w-fit"><Mail size={30} /></div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                <a href="mailto:info@idroshazli.it" className="text-lg sm:text-xl text-brand-navy hover:text-brand-orange transition-colors break-words">
                  info@idroshazli.it
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-gray-50 p-5 sm:p-8 rounded-3xl md:rounded-[2.5rem]">
              <div className="bg-brand-navy p-4 rounded-2xl text-white w-fit"><MapPin size={30} /></div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Sede Legale</p>
                <p className="text-base sm:text-lg text-brand-navy italic">Via Giuseppe Sercognani 19, Milano</p>
              </div>
            </div>

          </div>

          <div className="bg-brand-orange rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 text-white shadow-2xl h-fit">
            <h3 className="text-2xl sm:text-3xl mb-6 italic">Disponibili 24/7</h3>
            <p className="text-white/80 mb-8 font-medium">Siamo pronti ad intervenire per qualsiasi emergenza o preventivo gratuito.</p>
            <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl text-sm sm:text-base">
              <Clock className="shrink-0" />
              <span>Sempre attivi, anche i festivi.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
