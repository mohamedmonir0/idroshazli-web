"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-brand-navy tracking-tighter">
          IDRO<span className="text-brand-orange">SHAZLI</span>
        </Link>

        {/* ضفنا Lavora con noi هنا في المنيو */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-brand-navy">
          <Link href="/#servizi" className="hover:text-brand-orange transition-colors">Servizi</Link>
          <Link href="/chi-siamo" className="hover:text-brand-orange transition-colors">Chi siamo</Link>
          <Link href="/lavora-con-noi" className="hover:text-brand-orange transition-colors">Lavora con noi</Link>
          <Link href="/contatti" className="hover:text-brand-orange transition-colors">Contatti</Link>
        </div>

        <a href="tel:+393896616549" className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
          <Phone size={18} fill="white" />
          <span>Chiama ora</span>
        </a>
      </div>
    </nav>
  );
}
