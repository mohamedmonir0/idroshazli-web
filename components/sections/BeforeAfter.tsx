export default function BeforeAfter() {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black mb-4">I Nostri Lavori: <span className="text-brand-sky">Risultati Reali</span></h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto italic text-lg">Qualità e precisione in ogni intervento, dal guasto alla soluzione perfetta.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/5 group">
            <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-2 rounded-full font-black text-xs z-10 shadow-xl">PRIMA</div>
            <img src="/images/before.png" className="w-full h-[550px] object-cover grayscale brightness-75" alt="Prima" />
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-brand-sky shadow-[0_0_60px_rgba(0,174,239,0.2)]">
            <div className="absolute top-6 right-6 bg-green-500 text-white px-6 py-2 rounded-full font-black text-xs z-10 shadow-xl">DOPO</div>
            <img src="/images/after.png" className="w-full h-[550px] object-cover" alt="Dopo" />
          </div>
        </div>
      </div>
    </section>
  );
}
