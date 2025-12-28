import Image from "next/image";

export default function FeatureShowcase() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-sm group">
            {/* Header of the mock browser/app window */}
            <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>

            {/* Content */}
            <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
               <Image 
                src="/assets/sidebar-2.png" 
                alt="Y-Axis Interface" 
                fill 
                className="object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-[1.02]"
              /> 
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />
            </div>
            
            {/* Feature Highlight Badge */}
             <div className="absolute bottom-8 left-8 p-4 glass-panel rounded-xl max-w-sm transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif italic text-xl text-white mb-1">Contextual Sidebar</h3>
                <p className="text-ai-text-muted text-sm">Automatically generates a timeline of your conversation, allowing you to jump back and forth instantly.</p>
             </div>
          </div>

           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-ai-accent/20 flex items-center justify-center text-ai-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Universal Support</h3>
                  <p className="text-ai-text-muted text-sm">Works seamlessly with ChatGPT, Claude, and Gemini.</p>
               </div>
               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Time Saver</h3>
                  <p className="text-ai-text-muted text-sm">Stop scrolling endlessly. Find exactly what you discussed hours ago.</p>
               </div>
               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Aesthetic UI</h3>
                  <p className="text-ai-text-muted text-sm">Designed to look and feel like a native part of your browser.</p>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
