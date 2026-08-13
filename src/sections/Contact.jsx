function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-blue-500 font-medium mb-3">Contact</p>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Travaillons ensemble
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
          Vous souhaitez échanger à propos de mon parcours, d'un projet ou d'une
          opportunité ? N'hésitez pas à me contacter.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="mailto:tonemail@example.com"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Me contacter
          </a>

          <a
            href="https://github.com/Jewrign"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
