function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900/40 border-t border-slate-800/40"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-3">Formation</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mon parcours académique
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-2xl">
            Un parcours orienté vers l’informatique, le développement logiciel
            et la conception de solutions numériques.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="relative border-l border-slate-700 pl-8">
            <div className="relative pb-4">
              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950" />

              <p className="text-blue-500 font-medium mb-2">2022 — 2026</p>

              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Licence en Informatique - Spécialité génie logiciel
              </h3>

              <p className="text-slate-300 mt-2 font-medium">
                Université Iba Der Thiam de Thiès
              </p>

              <p className="text-slate-400 leading-relaxed mt-4">
                Formation couvrant notamment la programmation, les bases de
                données, les réseaux, la conception logicielle, l'analyse et la
                modélisation des systèmes informatiques.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "Programmation",
                  "Bases de données",
                  "Génie logiciel",
                  "Développement web",
                  "Réseaux",
                  "UML & Merise",
                ].map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/50 text-slate-300 text-sm"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
