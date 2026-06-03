"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Mock Supabase insertion
      // await supabase.from('messages').insert([data]);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Mock Supabase Insert:", data);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-4">
          <span className="text-emerald-400 font-mono text-xl">03.</span> What's Next?
        </h2>
        <p className="text-zinc-400 text-lg mb-10">
          I'm currently looking for new opportunities in embedded engineering and AI development. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <form onSubmit={handleSubmit} className="text-left space-y-4 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={5}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
              placeholder="Hello! I'd like to discuss..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-sm text-center mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-4">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
