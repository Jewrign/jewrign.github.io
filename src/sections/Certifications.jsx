const certifications = [
  {
    title: "Nom de la certification",
    organization: "Organisme",
    year: "2026",
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/50"
            >
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
