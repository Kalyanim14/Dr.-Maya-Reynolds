export default function Footer() {
  return (
  <footer className="bg-slate-950 px-6 pb-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kalyani Mantramurthi</p>
        <div className="flex gap-5">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyanimantramurthi@gmail.com" className="hover:text-white">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </div>
  </footer>
  );
}
