const certifications = [
  {
    title: "Développement mobile",
    organization: "FORCE-N",
    year: "2025",
    link: "#",
  },
  {
    title: "Développement web niveau avancé",
    organization: "D-CLIC",
    year: "2025",
    link: "#",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-3">Certifications</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certifications et formations complémentaires
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-2xl">
            Des formations et certifications qui complètent mon parcours
            académique et me permettent de développer continuellement mes
            compétences techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="group p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/40 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 mb-4">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-white">
                {certification.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {certification.organization}
              </p>

              <p className="text-slate-500 text-sm mt-1">
                {certification.year}
              </p>

              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-blue-500 hover:text-blue-400 transition"
              >
                Voir le certificat →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
