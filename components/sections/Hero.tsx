"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[640px] h-[88svh] md:h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img src="/images/Hero.webp" className="w-full h-full object-cover" alt="Idraulico Milano" />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-navy via-brand-navy/75 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black mb-4 leading-none break-words">
            IDRO<span className="text-brand-sky">SHAZLI</span>
          </h1>
          <p className="text-white/90 text-base sm:text-xl md:text-2xl max-w-xl mb-8 leading-relaxed font-light">
            Il tuo idraulico di fiducia a <span className="font-bold border-b-2 border-brand-orange">Milano</span>. 
            Interventi rapidi, certificati e garantiti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="inline-flex justify-center bg-brand-orange text-white px-6 sm:px-10 py-4 rounded-full font-black hover:scale-105 transition-all text-sm sm:text-base">
              CONTATTACI ORA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
