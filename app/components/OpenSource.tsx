import { Github, Star, GitFork, Heart, ExternalLink } from "lucide-react";

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/background-4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-radial-[circle_at_center] from-ai-accent/15 via-transparent to-transparent opacity-60 blur-3xl -z-10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Heart className="w-3 h-3 fill-current" />
            Free & Open Source
          </div>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 text-white/90">
            Built in the <span className="font-serif italic">open</span>,<br />
            for{" "}
            <span className="text-ai-accent font-serif italic">everyone</span>
          </h2>

          <p className="text-sm md:text-lg text-ai-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Y-Axis is open source. As we are big time open-source fans because
            of its collaborative nature and growth-for-all persona. We built
            Y-Axis a community of folks just like us because we wanted to give
            something back to place we have learnt so much from.
          </p>
        </div>

        {/* GitHub Card */}
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <a
            href="https://github.com/adnankhan46/y-axis"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 rounded-2xl bg-white/5 border border-white/10 "
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center transition-colors">
                  <Github className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    adnankhan46/y-axis
                    <ExternalLink className="w-4 h-4 text-ai-text-muted group-hover:text-ai-accent transition-colors" />
                  </h3>
                  <p className="text-ai-text-muted text-sm">
                    Scroll through long LLM chats
                  </p>
                </div>
              </div>
            </div>

            <p className="text-ai-text-muted mb-6 text-sm md:text-lg">
              You can be a part of this journey by helping us improve{" "}
              <span className="font-serif italic">Y-Axis</span> for thousands of
              people around the world.{" "}
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-ai-text-muted hover:text-yellow-400 transition-colors">
                <Star className="w-4 h-4" />
                <span>Star on GitHub</span>
              </div>
              <div className="flex items-center gap-2 text-ai-text-muted hover:text-ai-accent transition-colors">
                <GitFork className="w-4 h-4" />
                <span>Fork</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
