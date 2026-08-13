function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-3">Formation</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mon parcours académique
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="relative border-l border-slate-700 pl-8">
            <div className="relative">
              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950" />

              <p className="text-blue-500 font-medium mb-2">2023 — 2026</p>

              <h3 className="text-xl font-semibold text-white">
                Licence en Informatique
              </h3>

              <p className="text-slate-400 mt-2">
                Université Iba Der Thiam de Thiès
              </p>

              <p className="text-slate-400 leading-relaxed mt-4">
                Formation couvrant notamment la programmation, les bases de
                données, les réseaux, la conception logicielle, l'analyse et la
                modélisation des systèmes informatiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
