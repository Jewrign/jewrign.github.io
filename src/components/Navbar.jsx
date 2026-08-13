function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white">
          Jewrign<span className="text-blue-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-slate-300 hover:text-white transition"
          >
            Accueil
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-white transition"
          >
            À propos
          </a>

          <a
            href="#skills"
            className="text-slate-300 hover:text-white transition"
          >
            Compétences
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-white transition"
          >
            Projets
          </a>

          <a
            href="#education"
            className="text-slate-300 hover:text-white transition"
          >
            Parcours
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* CV */}
        <a
          href="/CV_Elhadji_SENE.pdf"
          className="hidden md:inline-block px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Mon CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
