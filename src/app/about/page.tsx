import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description:
    "Saya merupakan seorang santri sekaligus mahasiswa yang sedang membangun impian menjadi software engineer.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          About Me
        </p>

        <h1 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Saya adalah seorang santri sekaligus mahasiswa yang suka membangun
          produk yang bermanfaat bagi diri sendiri maupun orang lain.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Saya sedang belajar dan berkembang di bidang software engineer,
          khususnya full-stack dengan Laravel, Next.js, TypeScript, dan Tailwind
          CSS. Saya menyukai proses merancang tampilan yang sederhana, bersih,
          dan mudah dipahami oleh pengguna.
        </p>
      </section>
    </main>
  );
}
