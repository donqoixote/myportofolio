export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
        <p>
          © {new Date().getFullYear()} Muhammad Shofiyulloh. All rights
          reserved.
        </p>

        <div className="flex items-center justify-center gap-4 md:justify-end">
          <a
            href="mailto:emailanda@example.com"
            className="transition hover:text-white"
          >
            Email
          </a>
          <a
            href="https://github.com/donqoixote"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
