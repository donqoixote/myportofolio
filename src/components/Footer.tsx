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
            href="mailto:portgasace1950@gmail.com"
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
          <a
            href="https://instagram.com/sofidasilva17"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition hover:text-cyan-300"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/Donqoixote X"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-cyan-300"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5.2 8.2H2.8V21h2.4V8.2ZM4 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM21.2 13.7c0-3.8-2-5.6-4.7-5.6-2.1 0-3 1.2-3.5 2v-1.9H10.6V21H13v-6.3c0-1.7.3-3.4 2.5-3.4 2.2 0 2.2 2 2.2 3.5V21h3.5v-7.3Z" />
            </svg>
          </a>
          <a
            href="https://threads.net/@sofidasilva17"
            target="_blank"
            rel="noreferrer"
            aria-label="Threads"
            className="transition hover:text-cyan-300"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M19.2 13.2c-.2 4.5-2.8 7.2-7.1 7.2-4.4 0-7.3-3-7.3-8.4s2.9-8.4 7.3-8.4c3.8 0 6.4 2 7 5.5" />
              <path d="M19.1 13.2c-1.1-1.4-3-2.1-5.2-2.1-2.5 0-4.1 1-4.1 2.7 0 1.6 1.4 2.5 3.4 2.5 2.7 0 4.7-1.5 4.7-4.3 0-4.1-2.6-6.2-6-6.2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
