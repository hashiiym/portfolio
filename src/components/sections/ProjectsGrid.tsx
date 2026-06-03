export default function ProjectsGrid() {
  const projects = [
    {
      title: "SparkHub",
      description: "An AI-driven career guidance ecosystem providing personalized roadmaps and mentorship.",
      tech: ["Next.js", "Cosmos DB", "Gemini API"],
      link: "#"
    },
    {
      title: "RFID Attendance System",
      description: "IoT hardware solution syncing real-time attendance data directly to Google Sheets.",
      tech: ["ESP32", "Apps Script", "C++"],
      link: "#"
    },
    {
      title: "Printora",
      description: "A 3D-printing startup MVP aiming to streamline custom manufacturing and prototyping.",
      tech: ["React", "Node.js", "Stripe"],
      link: "#"
    },
    {
      title: "Imagine Cup MVP",
      description: "Microsoft Imagine Cup 2026 submission focused on AI-powered accessibility solutions.",
      tech: ["Python", "Azure", "Hardware"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">02.</span> Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group p-6 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-xl transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <a href={project.link} className="text-zinc-500 hover:text-emerald-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs font-mono text-zinc-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
