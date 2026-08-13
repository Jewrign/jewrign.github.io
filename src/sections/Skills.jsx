const skills = [
  {
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
  {
    category: "Bases de données",
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Outils & DevOps",
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 rounded-xl border border-slate-800 bg-slate-950"
            >
              <h3 className="text-xl font-semibold text-white mb-5">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm"
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
