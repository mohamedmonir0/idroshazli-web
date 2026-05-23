export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-brand-navy">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 text-brand-navy shadow-2xl">
        <h2 className="text-3xl font-black text-center mb-2">Hai un'emergenza?</h2>
        <p className="text-center text-gray-500 mb-8">Inviaci una foto del guasto per un preventivo immediato.</p>
        <form className="space-y-5">
          <input type="text" placeholder="Nome Completo" className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-brand-sky outline-none" />
          <input type="tel" placeholder="Numero di Telefono" className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-brand-sky outline-none" />
          <textarea placeholder="Descrivi il problema..." className="w-full border-2 border-gray-100 p-4 rounded-2xl h-32 focus:border-brand-sky outline-none"></textarea>
          <div className="border-2 border-dashed border-brand-sky/30 bg-brand-sky/5 p-8 rounded-2xl text-center cursor-pointer hover:bg-brand-sky/10 transition-all">
            <input type="file" className="hidden" id="file-up" />
            <label htmlFor="file-up" className="cursor-pointer font-bold text-brand-navy">
               📸 Carica foto del guasto
            </label>
          </div>
          <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-600 transition-all">
            INVIA RICHIESTA ORA
          </button>
        </form>
      </div>
    </section>
  );
}
