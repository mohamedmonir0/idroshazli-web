"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-brand-navy">
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter">IDROSHAZLI</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Partner di fiducia a Milano per servizi idraulici e ristrutturazioni. Qualità garantita 24/7.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg underline decoration-brand-sky underline-offset-8">Servizi</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="/services/emergenza" className="hover:text-brand-orange transition-colors">Pronto Intervento</Link></li>
              <li><Link href="/services/gas-riscaldamento" className="hover:text-brand-orange transition-colors">Impianti Gas</Link></li>
              <li><Link href="/services/climatizzazione" className="hover:text-brand-orange transition-colors">Climatizzazione</Link></li>
              <li><Link href="/services/ristrutturazioni" className="hover:text-brand-orange transition-colors">Ristrutturazioni</Link></li>
              <li><Link href="/services/pittura-elettricista" className="hover:text-brand-orange transition-colors">Pittura & Elettricità</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg underline decoration-brand-sky underline-offset-8">Azienda</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="/chi-siamo" className="hover:text-brand-orange transition-colors">Chi Siamo</Link></li>
              <li><Link href="/lavora-con-noi" className="hover:text-brand-orange transition-colors">Lavora con noi</Link></li>
              <li><Link href="/contatti" className="hover:text-brand-orange transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg underline decoration-brand-sky underline-offset-8">Contatti</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3 font-bold">
                <Phone size={18} className="text-brand-orange" />
                <a href="tel:+393896616549" className="hover:text-brand-orange transition-colors">+39 389 661 6549</a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-sky" />
                <span>Via Giuseppe Sercognani 19, Milano</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-sky" />
                <a href="mailto:info@idroshazli.it" className="hover:text-brand-orange">info@idroshazli.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-[10px] text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} IDROSHAZLI DI ALSAYED AHMED</p>
          <p className="mt-1 uppercase tracking-widest">P.IVA: IT 14400030962 | C.F.: LSYHDB96P29Z3361</p>
        </div>
      </div>
    </footer>
  );
}
