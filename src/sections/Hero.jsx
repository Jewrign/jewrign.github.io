function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <p className="text-blue-500 font-medium mb-4">Bonjour, je suis</p>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Elhadji Alioune Badara SENE
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-4">
              Développeur logiciel junior
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mt-6 max-w-xl">
              Je conçois et développe des applications web modernes en utilisant
              React, Laravel et les technologies du développement logiciel.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Voir mes projets
              </a>

              <a
                href="/CV_Elhadji_SENE.pdf"
                className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 transition"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Emplacement de la photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-blue-500/40 flex items-center justify-center bg-slate-900">
              <span className="text-slate-600 text-sm">Votre photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
