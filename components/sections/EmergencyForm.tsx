"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Camera, User, Phone, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function EmergencyForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    let photoPublicUrl = "بدون صورة";

    try {
      // 1. رفع الصورة لـ Supabase (لو موجودة)
      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('uploads')
          .upload(fileName, selectedFile);

        if (!uploadError) {
          const { data: publicUrlData } = supabase.storage
            .from('uploads')
            .getPublicUrl(fileName);
          photoPublicUrl = publicUrlData.publicUrl;
        } else {
          throw uploadError;
        }
      }

      // 2. إرسال البيانات للـ API
      await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          message: `${formData.get('msg')}\n📍 العنوان: ${formData.get('location')}`,
          fileUrl: photoPublicUrl,
          type: 'emergency'
        })
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Si è verificato un errore durante l\'invio. Riprova più tardي!');
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="min-h-screen bg-[#FDFDFD] py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10 md:mb-16">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full font-bold mb-4 text-sm"
                >
                  <MapPin size={16} /> Attivi a Milano 24/7
                </motion.div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0B1E36] mb-4 tracking-tighter leading-none">
                  PRONTO <span className="text-[#E87A00]">EMERGENZA</span>
                </h1>
                <p className="text-gray-400 italic text-base sm:text-xl">Arrivo in 30 minuti. Soluzioni idrauliche immediate.</p>
              </div>

              <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-5 sm:p-8 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-50">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="relative">
                      <label className="flex items-center gap-2 text-sm font-bold text-[#0B1E36] mb-3 uppercase tracking-wider">
                        <User size={16} /> Nome Completo *
                      </label>
                      <input name="name" required className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl border-none focus:ring-2 focus:ring-[#E87A00] transition-all outline-none text-base md:text-lg" placeholder="Mario Rossi" />
                    </div>
                    <div className="relative">
                      <label className="flex items-center gap-2 text-sm font-bold text-[#0B1E36] mb-3 uppercase tracking-wider">
                        <Phone size={16} /> Telefono *
                      </label>
                      <input name="phone" required className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl border-none focus:ring-2 focus:ring-[#E87A00] transition-all outline-none text-base md:text-lg" placeholder="+39 3XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-bold text-[#0B1E36] mb-3 uppercase tracking-wider">
                      <MapPin size={16} /> Indirizzo/Luogo a Milano *
                    </label>
                    <input name="location" required className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl border-none focus:ring-2 focus:ring-[#E87A00] transition-all outline-none text-base md:text-lg" placeholder="Es. Via Giuseppe Sercognani, 19" />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-[#0B1E36] mb-3 uppercase tracking-wider">
                      <Camera size={16} /> Carica foto del guasto
                    </label>
                    <label className="group relative flex flex-col items-center justify-center w-full min-h-36 md:h-40 border-2 border-dashed border-gray-200 rounded-3xl cursor-pointer hover:bg-gray-50 hover:border-[#E87A00] transition-all overflow-hidden px-4 text-center">
                      <div className="flex flex-col items-center justify-center py-6">
                        <Camera className={`w-10 h-10 mb-3 ${selectedFile ? 'text-green-500' : 'text-[#E87A00]'}`} />
                        <p className="text-sm font-medium text-gray-500">
                          {selectedFile ? selectedFile.name : "Trascina qui la foto o clicca"}
                        </p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-[#0B1E36] mb-3 block uppercase tracking-wider">Descrizione dell&apos;urgenza</label>
                    <textarea name="msg" rows={4} className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl border-none focus:ring-2 focus:ring-[#E87A00] transition-all outline-none text-base md:text-lg" placeholder="Es. Perdita d'acqua dal termosifone..."></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="w-full bg-[#E87A00] text-white font-black py-4 md:py-6 rounded-2xl text-base sm:text-xl shadow-2xl hover:bg-[#0B1E36] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : "INVIA EMERGENZA ORA"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 md:py-24 px-5 bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border border-gray-50"
            >
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <CheckCircle2 size={96} className="text-green-500 mx-auto mb-8 md:w-[120px] md:h-[120px]" />
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B1E36] mb-4">Richiesta inviata!</h2>
              <p className="text-gray-400 text-lg sm:text-2xl font-medium tracking-tight">Il nostro idraulico più vicino sarà da te a breve.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
