import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-[#050b14]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/60 bg-cyan-400/10 text-sm font-bold text-cyan-300 shadow-[0_0_18px_rgba(0,240,255,0.4)]">
            MS
          </span>
          <span className="font-semibold tracking-[0.2em] text-slate-200 uppercase text-[11px]">
            Portfolio
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
