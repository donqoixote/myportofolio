import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Daftar project yang pernah dan sedang saya kerjakan.",
};

export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Projects
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Proyek yang sedang saya bangun
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20"
          >
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
              Web App
            </span>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="mt-3 text-slate-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Lihat Detail →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
