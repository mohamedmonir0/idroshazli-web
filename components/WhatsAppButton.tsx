"use client";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-5 w-5 md:h-7 md:w-7"
      fill="currentColor"
    >
      <path d="M16.01 3.2c-7.02 0-12.73 5.62-12.73 12.54 0 2.38.68 4.7 1.96 6.7L3.2 28.8l6.58-2.02a12.9 12.9 0 0 0 6.23 1.6c7.02 0 12.73-5.62 12.73-12.54S23.03 3.2 16.01 3.2Zm0 22.99c-1.89 0-3.73-.5-5.34-1.45l-.38-.22-3.9 1.2 1.2-3.76-.25-.39a10.24 10.24 0 0 1-1.73-5.73c0-5.7 4.66-10.35 10.4-10.35s10.4 4.64 10.4 10.35-4.66 10.35-10.4 10.35Zm5.7-7.75c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.69-.97-2.32-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.5 1.11 2.96 1.26 3.17.16.21 2.18 3.29 5.28 4.61.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.84-.74 2.1-1.46.26-.72.26-1.33.18-1.46-.08-.13-.29-.2-.6-.35Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/393896616549" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-4 right-4 z-[100] flex items-center gap-2 md:gap-4 rounded-full bg-[#25D366] p-2 md:p-2 md:pr-8 text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-all hover:scale-105 md:bottom-8 md:right-8 md:shadow-[0_20px_50px_rgba(37,211,102,0.4)]"
    >
      <div className="rounded-full bg-white p-3 text-[#25D366] md:p-3.5">
        <WhatsAppIcon />
      </div>
      <span className="hidden md:inline font-extrabold text-lg">Contattaci su WhatsApp</span>
    </a>
  );
}
