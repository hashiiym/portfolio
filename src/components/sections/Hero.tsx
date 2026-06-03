export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="max-w-4xl w-full flex flex-col items-start gap-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Muhammed Hashim
        </h1>
        <h2 className="text-2xl md:text-3xl text-emerald-400 font-medium font-mono">
          Building Intelligent Systems
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          I bridge the gap between hardware engineering and full-stack AI development.
          Currently pursuing dual degrees in ECE & Data Science, exploring the intersection of IoT, 
          embedded systems, and artificial intelligence.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 text-zinc-300 font-semibold rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
