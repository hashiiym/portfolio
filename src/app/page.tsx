import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
      
      <footer className="py-6 text-center text-zinc-500 text-sm border-t border-zinc-900">
        <p>© {new Date().getFullYear()} Muhammed Hashim. Built with Next.js & Tailwind CSS v4.</p>
      </footer>
    </main>
  );
}
