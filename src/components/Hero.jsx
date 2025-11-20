export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.2),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Your Name
            </h1>
            <p className="mt-3 text-lg text-blue-200">
              Your Title • Your Location
            </p>
            <p className="mt-6 text-blue-100/80 leading-relaxed">
              Brief professional summary in 2–3 sentences. Highlight your strongest skills,
              your industry focus, and what you like to build or deliver.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg bg-blue-500 text-white px-4 py-2 shadow hover:bg-blue-400 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-blue-400/50 text-blue-100 px-4 py-2 hover:bg-blue-400/10"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 p-2">
              <img
                alt="Portrait"
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1000&auto=format&fit=crop"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
