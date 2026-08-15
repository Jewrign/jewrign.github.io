function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Elhadji SENE. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Jewrign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition text-sm"
            >
              GitHub
            </a>

            <a
              href="#home"
              className="text-slate-500 hover:text-white transition text-sm"
            >
              Retour en haut ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
