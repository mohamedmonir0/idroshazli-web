'use client';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Upload } from 'lucide-react';
import { supabase } from '@/lib/supabase'; 

export default function LavoraConNoi() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const file = formData.get('cv') as File;
    let cvPublicUrl = "N/A";

    // 1. رفع الـ CV لـ Supabase (لو موجود)
    if (file && file.size > 0) {
      const fileNameToSave = `${Date.now()}.${file.name.split('.').pop()}`;
      const { error: uploadError } = await supabase.storage
        .from('cv-uploads')
        .upload(fileNameToSave, file);

      if (!uploadError) {
        const { data: { publicUrl } } = supabase.storage
          .from('cv-uploads')
          .getPublicUrl(fileNameToSave);
        cvPublicUrl = publicUrl;
      }
    }

    // 2. إرسال البيانات للـ API بتاعنا
    await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('nomeCompleto'),
        phone: formData.get('telefono'),
        message: `Email: ${formData.get('email')}\nEsperienza: ${formData.get('presentazione')}`,
        fileUrl: cvPublicUrl,
        type: 'job'
      })
    });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="text-center mb-10 md:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0B1E36] mb-4 leading-none">UNISCITI AL <span className="text-[#E87A00]">TEAM</span></h1>
              </div>

              <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-2xl border border-gray-100 space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="nomeCompleto" placeholder="Nome Completo *" required className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl outline-none" />
                  <input name="telefono" placeholder="Telefono *" required className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl outline-none" />
                  <input name="email" type="email" placeholder="Email *" required className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl outline-none" />
                  
                  <div>
                    <label className="flex flex-col items-center justify-center w-full min-h-36 md:h-40 border-2 border-dashed border-gray-200 rounded-3xl cursor-pointer hover:bg-gray-50 hover:border-[#E87A00] transition-all px-4 text-center">
                      <div className="flex flex-col items-center justify-center py-6">
                        <Upload className={`w-10 h-10 mb-3 text-[#E87A00]`} />
                        <p className="text-sm font-medium text-gray-500">{fileName ? fileName : "Allega CV (PDF/Word)"}</p>
                      </div>
                      <input type="file" name="cv" required className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} accept=".pdf,.doc,.docx" />
                    </label>
                  </div>

                  <textarea name="presentazione" rows={4} placeholder="Parlaci un po' di te..." className="w-full bg-gray-50 p-4 md:p-5 rounded-2xl outline-none"></textarea>
                  
                  <button disabled={loading} type="submit" className="w-full bg-[#0B1E36] text-white font-black py-4 md:py-6 rounded-2xl text-base sm:text-xl hover:bg-[#E87A00] transition-all duration-300">
                    {loading ? <Loader2 className="animate-spin mx-auto" /> : "INVIA CANDIDATURA"}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16 md:py-24 px-5 bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border border-gray-50">
              <CheckCircle2 size={96} className="text-green-500 mx-auto mb-8 md:w-[120px] md:h-[120px]" />
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B1E36]">Candidatura Inviata!</h2>
              <p className="text-gray-400 text-lg sm:text-2xl mt-4 tracking-tight">Ti risponderemo presto.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
