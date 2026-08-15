const skills = [
  {
    category: "Frontend",
    icon: "⌘",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "</>",
    technologies: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
  {
    category: "Bases de données",
    icon: "▣",
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Outils & DevOps",
    icon: "⚙",
    technologies: ["Git", "GitHub", "Docker", "Postman", "Render"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-500 font-medium mb-3">Compétences</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technologies que j'utilise
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mt-4 max-w-2xl">
            Un ensemble de technologies et d'outils que j'utilise pour
            concevoir, développer et déployer des applications web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group p-6 rounded-xl border border-slate-800 bg-slate-950 hover:border-blue-500/40 hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 font-semibold">
                  {skill.icon}
                </span>

                <h3 className="text-xl font-semibold text-white">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-sm hover:text-white hover:border-blue-500/40 transition"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
