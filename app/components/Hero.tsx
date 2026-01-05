import { chromeWebStoreLink } from "@/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        className="relative pt-16 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-visible"
        style={{
          backgroundImage: "url('/assets/background-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-radial-[circle_at_center_top] from-ai-accent/20 via-transparent to-transparent opacity-50 blur-3xl -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-ai-accent mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ai-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-accent"></span>
          </span>
          Available for Chromium Browsers
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 max-w-4xl mx-auto animate-in font-sans fade-in slide-in-from-bottom-8 duration-700 delay-100 text-white/90">
          <span className="font-serif italic">Navigate</span> through <br />
          <span className="text-ai-accent not-italic font-sans">
            long{" "}
          </span>{" "}
          <span className="text-ai-accent font-serif italic">LLM chats</span>
        </h1>

        <p className="text-sm md:text-xl text-ai-text-muted max-w-xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          A time saving sidebar for ChatGPT, Gemini and Claude. <br />
          Jump to any part of your conversation instantly.
        </p>

        <div
          id="demo"
          className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
        >
          <button className="group relative px-8 py-4 cursor-pointer bg-ai-accent text-white rounded-full font-semibold text-lg">
            <span className="flex items-center gap-2">
              <Link
                href={chromeWebStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Chrome
              </Link>{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 cursor-pointer bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-all">
            <Link
              href="/help"
            >
              How to Download
            </Link>
          </button>
        </div>

        {/* Sidebar image - desktop only */}
        {/* Old approach with image */}
        {/* <img 
          src="/assets/sidebar-1.png" 
          alt="Y-Axis Sidebar Preview" 
          className="hidden lg:block absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 w-80 xl:w-80 rounded-2xl shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500"
        /> */}

        {/* Better Approach : Optimized but no qwality loss, happy */}
        <Image
          src="/assets/sidebar-1.png"
          alt="Y-Axis Sidebar Preview"
          width={320}
          height={640}
          quality={100}
          priority
          sizes="(min-width: 1280px) 320px, 320px"
          className="hidden lg:block absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 rounded-2xl shadow-2xl shadow-black/50"
        />
      </section>

      {/* Demo Video - 20% overlaps Hero, rest visible below */}
      <section className="relative -mt-32 pb-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm shadow-2xl shadow-black/50 group animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Browser window header */}
              <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <Link href="#demo" className="ml-4 text-sm text-ai-text-muted">
                  Y-Axis Demo
                </Link>
              </div>

              {/* Video */}
              <video
                src="/assets/y-axis-demo-v1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />

              {/* Feature Highlight Badge */}
              <div className="absolute bottom-8 left-8 p-4 glass-panel rounded-xl max-w-sm transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif italic text-xl text-white mb-1">
                  Contextual Sidebar
                </h3>
                <p className="text-ai-text-muted text-sm">
                  Automatically generates a timeline of your conversation,
                  allowing you to jump back and forth instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
