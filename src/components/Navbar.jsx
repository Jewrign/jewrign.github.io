import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Barre Principale */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold text-white tracking-tight hover:text-slate-200 transition"
          >
            <img
              src="../../public/images/web-design.png"
              alt="logo du site"
              className="w-20"
            />
          </a>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Accueil
            </a>

            <a
              href="#about"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              À propos
            </a>

            <a
              href="#skills"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Compétences
            </a>

            <a
              href="#projects"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Projets
            </a>

            <a
              href="#education"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Parcours
            </a>

            <a
              href="#contact"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Contact
            </a>
          </div>

          <a
            href="/CV_Elhadji_SENE.pdf"
            className="hidden md:inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 hover:-translate-y-0.5 transition duration-300"
          >
            Mon CV
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              //X
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              //hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800/70 py-5">
            <div className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                Accueil
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                À propos
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                Compétences
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                Projets
              </a>

              <a
                href="#education"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                Parcours
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white transition"
              >
                Contact
              </a>

              <a
                href="/CV_Elhadji_SENE.pdf"
                onClick={closeMenu}
                className="mt-3 px-4 py-3 rounded-lg bg-blue-600 text-center text-white font-medium hover:bg-blue-700 transition"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
