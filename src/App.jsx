import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <p className="leading-relaxed">
          I’m a [role] with [X]+ years of experience building [what you build]. I focus on
          [top skills or domains], creating solutions that are fast, accessible, and delightful
          to use. I care about clean architecture, meaningful impact, and strong collaboration.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-4">
              <div>
                <h3 className="text-white font-semibold">Company Name</h3>
                <p className="text-blue-200/80">Job Title</p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-blue-100/90">
                  <li>Key achievement or responsibility that shows impact.</li>
                  <li>Another concise bullet with metrics if possible.</li>
                </ul>
              </div>
              <p className="text-sm text-blue-300/70">Jan 20XX – Present • City, Country</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map((i) => (
            <a
              key={i}
              href="#"
              className="group rounded-xl border border-slate-700/60 bg-slate-900/40 overflow-hidden hover:border-blue-400/50 transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
              <div className="p-4">
                <h3 className="text-white font-semibold group-hover:text-blue-100">Project Title</h3>
                <p className="mt-1 text-sm text-blue-200/80">Short one-liner about what it does and why it matters.</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {['React', 'FastAPI', 'MongoDB'].map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            'JavaScript / TypeScript',
            'React / Next.js',
            'Python / FastAPI',
            'Databases (MongoDB, Postgres)',
            'Cloud & DevOps (Docker, CI/CD)',
            'Testing & Accessibility',
          ].map((s) => (
            <div key={s} className="px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-700/60">
              {s}
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="space-y-3">
          <div>
            <h3 className="text-white font-semibold">University Name</h3>
            <p className="text-blue-200/80">Degree • Field of Study</p>
            <p className="text-sm text-blue-300/70">201X – 201Y</p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid sm:grid-cols-2 gap-4">
          <form
            className="grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Replace this with your preferred contact method.');
            }}
          >
            <input
              required
              placeholder="Your name"
              className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <textarea
              required
              placeholder="Message"
              rows={4}
              className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <button className="inline-flex justify-center rounded-lg bg-blue-500 text-white px-4 py-2 hover:bg-blue-400 transition-colors">
              Send
            </button>
          </form>
          <div className="space-y-2 text-sm">
            <p>
              Email: <a href="mailto:you@example.com" className="text-blue-300 hover:text-white">you@example.com</a>
            </p>
            <p>
              LinkedIn: <a href="#" className="text-blue-300 hover:text-white">linkedin.com/in/your-handle</a>
            </p>
            <p>
              GitHub: <a href="#" className="text-blue-300 hover:text-white">github.com/your-handle</a>
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
