import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
type ProjectDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Project Not Found
        </h1>
        <p className="text-slate-400 mb-6">
          Maaf, project yang Anda cari tidak ditemukan.
        </p>
        <Link
          href="/projects"
          className="px-4 py-2 bg-cyan-500 text-slate-950 font-semibold rounded hover:bg-cyan-400 transition"
        >
          Kembali ke project
        </Link>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex text-cyan-300 hover:text-cyan-200"
        >
          ← Kembali ke Projects
        </Link>
        <p className="text-cyan-400">Detail Project</p>
        <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
        <p className="mt-6 text-slate-300">{project.longDescription}</p>
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
      </div>
    </main>
  );
}
export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} | Portfolio` : "Project Not Found",
    description: project?.longDescription ?? "Project tidak ditemukan.",
  };
}
