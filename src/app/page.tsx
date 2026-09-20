import Link from "next/link";

const stack = [
  "Laravel",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "React",
  "Node.js",
];

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <section className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-300">
            Available for work
          </span>

          <h1 className="neon-title mt-6 text-4xl font-black leading-none text-white md:text-6xl">
            Hi There! I&apos;m{" "}
            <span className="text-cyan-300">Muhammad Shofiyulloh</span>
          </h1>

          <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-slate-100 md:text-4xl">
            A <span className="text-cyan-300">FULLSTACK ENGINEER</span>. I HELP
            COMPANIES BUILD AND <span className="text-cyan-300">SCALE</span>{" "}
            THEIR PLATFORMS
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            I design and develop intuitive digital experiences that combine
            clean UI, smooth performance, and business-focused solutions for
            modern brands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Explore Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-cyan-400/40 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-white"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
            <div>
              <p className="text-2xl font-bold text-white">2+</p>
              <p>Years learning</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">8+</p>
              <p>Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4</p>
              <p>Certifications</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="hero-visual">
            <div className="floating-window floating-window-left">
              <div className="window-header">
                <span />
                <span />
                <span />
              </div>
              <div className="window-body">
                <div className="mini-bar short" />
                <div className="mini-bar" />
                <div className="mini-bar short" />
              </div>
            </div>

            <div className="floating-window floating-window-right">
              <div className="window-header">
                <span />
                <span />
                <span />
              </div>
              <div className="window-body">
                <div className="chart-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-glow" />
              <div className="avatar-wrap">
                <div className="avatar-head" />
                <div className="avatar-body" />
              </div>

              <div className="laptop-screen">
                <div className="screen-bar" />
                <div className="screen-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-6 backdrop-blur-sm md:p-8">
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-300 hover:text-cyan-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
