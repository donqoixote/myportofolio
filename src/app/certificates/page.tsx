import type { Metadata } from "next";
const certificates = [
  {
    title: "Membuat Front-end untuk Pemula",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/front-end.pdf",
  },
  {
    title: "Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/javascript.pdf",
  },
  {
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/Dasar-web.pdf",
  },
  {
    title: "Ai untuk Prodiktivitas",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/ai-produktifitas.pdf",
  },
  {
    title: "Penggunaan Generative AI",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/Penggunaan Generative AI.pdf",
  },
  {
    title: "Badan Ekraf Digital Talent",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/BDT.pdf",
  },
  {
    title: "Produktivity with AI",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/produktifity with ai.pdf",
  },
  {
    title: "Introduction Financial",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/financial.pdf",
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding",
    year: "2026",
    file: "/certificates/dicoding/penerapan data science.pdf",
  },
  {
    title: "Intro To Data Analys",
    issuer: "RevoU",
    year: "2025",
    file: "/certificates/intro-to-data-analys.pdf",
  },
  {
    title: "Introduction to Information Security Course",
    issuer: "Cyber Academy",
    year: "2025",
    file: "/certificates/cyber-security.pdf",
  },
  {
    title: "Belajar Linux Dari Nol",
    issuer: "ID-Networker",
    year: "2025",
    file: "/certificates/belajar-linux.pdf",
  },
];

export const metadata: Metadata = {
  title: "Certificates | Portfolio",
  description: "Daftar sertifikat dan pelatihan yang telah saya selesaikan.",
};

export default function Certificates() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Certificates
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Sertifikat yang saya miliki
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              {certificate.issuer}
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              {certificate.title}
            </h2>

            <p className="mt-2 text-slate-400">{certificate.year}</p>

            <a
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Lihat Sertifikat →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
