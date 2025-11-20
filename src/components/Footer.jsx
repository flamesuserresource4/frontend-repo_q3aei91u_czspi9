export default function Footer() {
  return (
    <footer className="border-t border-slate-700/40 mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-sm text-blue-300/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="opacity-80">Built with React & Tailwind</p>
      </div>
    </footer>
  );
}
