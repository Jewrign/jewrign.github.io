function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-blue-500 font-medium mb-3">À propos</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Mon parcours
          </h2>

          <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              Je suis{" "}
              <span className="text-white font-medium">
                Elhadji Alioune Badara SENE
              </span>
              , diplômé d’une Licence en informatique, avec un intérêt
              particulier pour le développement logiciel et la conception
              d’applications web.
            </p>

            <p>
              Au cours de ma formation, j’ai acquis des bases solides en
              programmation, bases de données, conception logicielle et
              développement web. J’ai progressivement orienté mon parcours vers
              le développement Full-Stack, notamment avec
              <span className="text-white">
                {" "}
                React.js, Laravel, PHP, JavaScript, MySQL et PostgreSQL
              </span>
              .
            </p>

            <p>
              Mes projets académiques et personnels m’ont permis de mettre ces
              connaissances en pratique, de la conception de l’architecture
              jusqu’au développement, aux tests et au déploiement.
            </p>

            <p>
              Je souhaite aujourd’hui poursuivre mes études en
              <span className="text-white font-medium"> Master</span> afin
              d’approfondir mes compétences en ingénierie logicielle,
              architecture applicative et développement de solutions
              informatiques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
