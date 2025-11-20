export default function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6">
        {title}
      </h2>
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 sm:p-8 text-blue-100/90">
        {children}
      </div>
    </section>
  );
}
