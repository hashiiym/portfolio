export default function About() {
  const skills = [
    "C", "C++", "Embedded C", "Python", "Java", "Next.js", "ESP32", "STM32", "Gemini API"
  ];
  
  const roles = [
    { title: "IEEE Membership Development Coordinator", org: "IEEE" },
    { title: "ThinkerHub Coordinator", org: "ThinkerHub" },
    { title: "IEDC Lead", org: "IEDC" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a 19-year-old student passionate about the synergy between hardware and software. 
              Currently, I am pursuing a B.Tech in Electronics and Communication Engineering (ECE) 
              alongside a BS in Data Science and Applications at IIT Madras.
            </p>
            <p>
              As a 2026 Google Gemini Student Ambassador, I am actively exploring the capabilities 
              of AI to build smarter, more capable embedded systems. My goal is to secure a role 
              as an embedded engineer or eventually become a tech founder.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Leadership</h3>
              <ul className="space-y-3">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      <span className="font-medium text-white">{role.title}</span>
                      <br />
                      <span className="text-sm text-zinc-500">{role.org}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-emerald-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
