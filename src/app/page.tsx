import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Senior Full-Stack Software Engineer
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
          I build software systems
          <br />
          that solve real problems.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
          I design and build scalable web applications, SaaS platforms,
          and business systems from idea to production.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  </main>
  );
}
