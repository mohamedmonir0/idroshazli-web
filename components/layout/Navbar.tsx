"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#servizi", label: "Servizi" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/lavora-con-noi", label: "Lavora con noi" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-3">
        <Link href="/" className="text-xl sm:text-2xl font-black text-brand-navy tracking-tighter shrink-0">
          IDRO<span className="text-brand-orange">SHAZLI</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-brand-navy">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-orange transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <a href="tel:+393896616549" className="bg-brand-orange text-white px-3 py-2.5 sm:px-5 md:px-6 md:py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all text-sm md:text-base">
          <Phone size={18} fill="white" />
          <span className="hidden sm:inline">Chiama ora</span>
        </a>

        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-brand-navy"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 shadow-xl">
          <div className="flex flex-col text-sm font-bold text-brand-navy">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-gray-100 last:border-b-0 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
