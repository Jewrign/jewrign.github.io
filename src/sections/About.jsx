function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800/40">
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
              , titulaire d’une Licence en informatique. Mon parcours m’a
              progressivement conduit vers le développement logiciel et la
              conception d’applications web, avec un intérêt particulier pour
              les solutions Full-Stack.
            </p>

            <p>
              Au cours de ma formation, j’ai développé des compétences en
              programmation, bases de données, conception logicielle et
              développement web. J’ai progressivement orienté mon parcours vers
              le développement Full-Stack, en travaillant notamment avec
              <span className="text-white">
                {" "}
                React.js, Laravel, PHP, JavaScript, MySQL et PostgreSQL
              </span>
              .
            </p>

            <p>
              Mes projets académiques et personnels m’ont permis de mettre ces
              compétences en pratique sur différentes étapes du cycle de
              développement : analyse des besoins, conception, architecture,
              développement, tests et déploiement. Ces expériences m’ont
              également permis de mieux comprendre les enjeux liés à la
              conception de solutions logicielles maintenables et évolutives.
            </p>

            <p>
              Je souhaite aujourd’hui poursuivre mes études en
              <span className="text-white font-medium"> Master</span> afin
              d’approfondir mes connaissances en ingénierie logicielle,
              architecture des systèmes et développement de solutions
              informatiques. Mon objectif est de consolider mes compétences
              techniques et méthodologiques pour être capable de concevoir des
              applications fiables, maintenables et adaptées aux besoins réels.
            </p>
          </div>

          <div className="mt-10 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
            <p className="text-blue-500 font-medium mb-2">Mon objectif</p>

            <p className="text-slate-300 leading-relaxed">
              Poursuivre mon parcours académique en Master tout en continuant à
              développer des projets concrets afin de renforcer mon expertise en
              développement logiciel et en architecture applicative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
