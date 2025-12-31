import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const faqs = [
  {
    question: "How do I install Y-Axis?",
    answer: "Click the 'Add to Chrome' button on our homepage. This will take you to the Chrome Web Store where you can install the extension with one click. Y-Axis also works with other Chromium-based browsers like Edge, Brave, and Opera.",
  },
  {
    question: "Which AI platforms are supported?",
    answer: "Y-Axis currently supports ChatGPT, Claude, and Google Gemini. We're actively working on adding support for more platforms. The sidebar automatically activates when you visit any of these supported sites.",
  },
  {
    question: "How do I open the sidebar?",
    answer: "The Y-Axis sidebar appears automatically on the right side of supported AI chat interfaces. You can toggle its visibility using the keyboard shortcut (Ctrl/Cmd + Shift + Y) or by clicking the Y-Axis icon in your browser toolbar.",
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. Y-Axis runs entirely in your browser and does not send any of your conversation data to external servers. All processing happens locally, and we don't collect or store any of your chat content. To know who our users are we only ask your email.",
  }
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-ai-accent/30 overflow-x-hidden">
      <Navbar />
      
      <section className="relative pt-32 pb-16 px-4" style={{ backgroundImage: "url('/assets/background-5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white/90">
              How can we <span className="font-serif italic">help</span> you?
            </h1>
            
            <p className="text-lg text-ai-text-muted max-w-xl leading-relaxed">
              Everything you need to know about installing, using, and getting the most out of Y-Axis.
            </p>
          </div>
          <img 
          src="/assets/y-axis-cmd.png" 
          alt="Y-Axis Sidebar Preview" 
          className="hidden lg:block absolute right-4 xl:right-6 top-2/3 -translate-y-1/2 w-80 xl:w-80 rounded-2xl shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500"
        />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details 
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
                >
                  <summary className="flex items-center gap-4 cursor-pointer list-none">
                    <span className="text-lg font-medium text-white flex-1">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-ai-text-muted group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 ml-14 text-ai-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="pt-20 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">Quick Start Guide</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-ai-accent flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Install the Extension</h3>
                  <p className="text-ai-text-muted">Visit the Chrome Web Store and click &quot;Add to Chrome&quot; to install Y-Axis.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-ai-accent flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Open an AI Chat</h3>
                  <p className="text-ai-text-muted">Navigate to ChatGPT, Claude, or Gemini. The Y-Axis sidebar will appear automatically.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-ai-accent flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Navigate Your Conversation</h3>
                  <p className="text-ai-text-muted">Click on any heading in the sidebar to instantly jump to that part of your chat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 mt-4 px-4" style={{ backgroundImage: "url('/assets/background-5.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Still need help?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://cal.com/adnan-khan-cy6kmb/2min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Schedule a Setup Meeting
              </a>
              <Link 
                href="/"
                className="px-6 py-3 bg-ai-accent text-white rounded-full font-medium hover:bg-ai-accent/90 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
