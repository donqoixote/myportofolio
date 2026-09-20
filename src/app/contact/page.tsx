import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-cyan-400">
          ← Kembali ke Home
        </Link>

        <h1 className="mt-10 text-4xl font-bold">Hubungi Saya</h1>

        <p className="mt-4 text-slate-300">
          Jika Anda ingin berdiskusi tentang project atau pekerjaan, silakan
          hubungi saya melalui kontak berikut.
        </p>

        <div className="mt-8 space-y-4">
          <p>
            Email:{" "}
            <a href="mailto:emailanda@example.com" className="text-cyan-400">
              portgasace1950@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/donqoixote"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400"
            >
              github.com/donqoixote
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
