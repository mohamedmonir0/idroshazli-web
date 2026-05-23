"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Hammer, Send, User, Mail, Phone, FileText, CheckCircle2, FileUp, Image as ImageIcon, Loader2 } from "lucide-react";

export default function LavoraConNoi() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // إعدادات FormSubmit عشان يوصلك الإيميل بشكل منظم
    formData.append("_captcha", "false");
    formData.append("_subject", "Nuova Candidatura - Idroshazli");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@idroshazli.it", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json(); 

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("الخطأ من السيرفر: " + (data.message || "Errore."));
        console.error("FormSubmit Error:", data);
      }
    } catch (error) {
      alert("Errore di connessione. Controlla la tua rete.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Hammer className="mx-auto text-brand-orange mb-6" size={50} />
          <h1 className="text-5xl font-black text-brand-navy mb-4 uppercase">Unisciti al <span className="text-brand-orange">Team</span></h1>
          <p className="text-xl text-gray-500 italic max-w-2xl mx-auto">
            Sei un idraulico esperto o un professionista del settore edile? Compila il form qui sotto per candidarti.
          </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <CheckCircle2 size={80} className="mx-auto text-green-500 mb-6" />
              <h3 className="text-3xl font-black text-brand-navy mb-4">Candidatura Inviata!</h3>
              <p className="text-gray-500 font-medium mb-8">Grazie per averci contattato. Valuteremo il tuo profilo e ti risponderemo al più presto.</p>
              <button onClick={() => setIsSubmitted(false)} className="text-brand-orange font-bold hover:underline">
                Invia un'altra candidatura
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy ml-2">Nome Completo *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input name="Nome Completo" required type="text" placeholder="Mario Rossi" className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy ml-2">Telefono *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input name="Telefono" required type="tel" placeholder="+39 333 000 0000" className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy ml-2">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input name="Email" required type="email" placeholder="mario.rossi@email.com" className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy ml-2">Allega CV (PDF/Word) *</label>
                  <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex items-center focus-within:ring-2 focus-within:ring-brand-orange/20">
                    <FileUp className="absolute left-4 text-gray-400 pointer-events-none" size={20} />
                    <input name="Curriculum Vitae" required type="file" accept=".pdf,.doc,.docx" className="w-full py-3 pl-12 pr-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-navy file:text-white hover:file:bg-brand-orange cursor-pointer transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy ml-2">Foto Personale *</label>
                  <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex items-center focus-within:ring-2 focus-within:ring-brand-orange/20">
                    <ImageIcon className="absolute left-4 text-gray-400 pointer-events-none" size={20} />
                    <input name="Foto Personale" required type="file" accept="image/*" className="w-full py-3 pl-12 pr-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-navy file:text-white hover:file:bg-brand-orange cursor-pointer transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy ml-2">Presentazione / Esperienza (Opzionale)</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-6 text-gray-400" size={20} />
                  <textarea name="Presentazione" rows={4} placeholder="Scrivi una breve presentazione (opzionale)..." className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none"></textarea>
                </div>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-brand-navy text-white font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-orange transition-colors shadow-lg hover:shadow-brand-orange/30 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
                <span>{isSubmitting ? "INVIO IN CORSO..." : "INVIA CANDIDATURA"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
