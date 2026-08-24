function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Contenu */}
          <div>
            {/* Domaine */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Développement logiciel · Full-Stack
            </div>

            {/* Présentation */}
            <p className="text-blue-500 font-medium mb-3">Bonjour, je suis</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-sm">
              Elhadji Alioune Badara
              <span className="text-blue-500"> SENE</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-5">
              Développeur Full-Stack Junior
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mt-6 max-w-xl">
              Je conçois et développe des applications web/mobiles modernes, de
              l'interface utilisateur jusqu'à l'API et la base de données, avec
              des technologies comme React et Laravel.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition duration-300"
              >
                Voir mes projets
                <span className="ml-2">→</span>
              </a>

              <a
                href="/CV_Elhadji_SENE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 transition duration-300"
              >
                Télécharger mon CV
              </a>
            </div>

            {/* Réseaux */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://github.com/Jewrign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition"
              >
                GitHub
              </a>

              <span className="text-slate-700">•</span>

              <a
                href="#contact"
                className="text-slate-500 hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition"
      >
        <span className="text-xs">Défiler</span>
        <span className="text-lg">↓</span>
      </a>
    </section>
  );
}

export default Hero;
