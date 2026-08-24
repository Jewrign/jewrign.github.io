const projects = [
  {
    title: "SenStock",
    image: "/images/senstock.png",
    category: "Application Full-Stack",
    description:
      "Application web de gestion de stock permettant de gérer les produits, les mouvements de stock et les alertes de seuil.",
    technologies: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Jewrign",
    demo: null,
  },

  {
    title: "CoopManager",
    image: "/images/coopmanager.png",
    category: "Application Full-Stack",
    description:
      "Projet académique de conception et de développement d’une solution numérique de gestion des convention pour notre université.",
    technologies: ["React", "Laravel", "MySQL", "Docker"],
    github: "https://github.com/Jewrign",
    demo: null,
  },

  {
    title: "Gestionnaire de tâches",
    image: "/images/sentask.png",
    category: "Application mobile",
    imageFit: "contain",
    description:
      "Application permettant de créer, organiser, modifier et supprimer des tâches à travers une interface simple.",
    technologies: ["Flutter", "Strapi", "SQLite", "Javascript"],
    github: "https://github.com/Jewrign",
    demo: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-3">Projets</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quelques projets réalisés
          </h2>

          <p className="text-slate-400 text-lg mt-4 max-w-2xl">
            Une sélection de projets académiques et personnels qui m'ont permis
            de mettre en pratique mes compétences en développement logiciel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
            >
              <div className="h-52 sm:h-48 bg-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Capture d'écran de ${project.title}`}
                  className={`w-full h-full ${
                    project.imageFit === "contain"
                      ? "object-contain p-4"
                      : "object-cover"
                  } group-hover:scale-105 transition duration-500`}
                />
              </div>

              <div className="p-6">
                <p className="text-blue-500 text-sm font-medium mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 hover:text-white transition"
                  >
                    GitHub →
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-400 transition"
                    >
                      Démo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
