export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} Jenovax. All rights reserved.</div>
        <nav className="flex items-center gap-5 text-sm text-white/60">
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#work">Work</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
