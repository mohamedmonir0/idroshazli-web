"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/393896616549" 
      target="_blank" 
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 bg-[#25D366] text-white p-2 pr-8 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-105 transition-all"
    >
      <div className="bg-white p-3 rounded-full text-[#25D366]">
        <MessageCircle size={30} />
      </div>
      <span className="font-extrabold text-lg">Contattaci su WhatsApp</span>
    </a>
  );
}
