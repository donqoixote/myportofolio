import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <Link href="/projects" className="mt-6 inline-block text-cyan-300">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex text-cyan-300 transition hover:text-cyan-200"
      >
        ← Kembali ke Projects
      </Link>

      <article className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20 md:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Detail Project
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {project.longDescription}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Teknologi</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-cyan-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
