"use client";

import { chromeWebStoreLink } from "@/utils";
import { ArrowRight, Play, Pause, Volume2, VolumeX, ArrowBigUpDashIcon, ArrowUpRightSquare, ArrowUpRight, ArrowUpRightSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SidebarPreview from "./SidebarPreview";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent triggering video click when clicking buttons
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation(); 
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section
        className="relative pt-16 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-visible"
        style={{
          backgroundImage: "url('/assets/bg-1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-radial-[circle_at_center_top] from-ai-accent/20 via-transparent to-transparent opacity-50 blur-3xl -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-ai-accent mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ai-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-accent"></span>
          </span>
          Now Supports NotebookLM <ArrowUpRightSquareIcon className="h-3.5 w-3.5"/>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 max-w-4xl mx-auto animate-in font-sans fade-in slide-in-from-bottom-8 duration-700 delay-100 text-white/90">
          <span className="font-serif italic">Navigate</span> through <br />
          <span className="text-ai-accent not-italic font-sans">long </span>{" "}
          <span className="text-ai-accent font-serif italic">LLM chats</span>
        </h1>

        <p className="text-sm md:text-xl text-ai-text-muted max-w-xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          A time saving sidebar for ChatGPT, Gemini and Claude. <br />
          Jump to any part of your conversation instantly.
        </p>

        <div id="demo" className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <button className="group relative px-8 py-4 cursor-pointer bg-ai-accent text-white rounded-full font-semibold text-lg">
            <span className="flex items-center gap-2">
              <Image src="/images/chrome-icon.png" width={30} height={30} alt="Chrome" />
              <Link href={chromeWebStoreLink} target="_blank" rel="noopener noreferrer">
                Add to Chrome
              </Link>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 cursor-pointer bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-all">
            <Link href="/help">How to Download</Link>
          </button>
        </div>
       
        <SidebarPreview />

        {/* <Image
          src="/assets/sidebar-1.png"
          alt="Y-Axis Sidebar Preview"
          width={320}
          height={640}
          quality={100}
          priority
          className="hidden lg:block absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 rounded-2xl shadow-2xl shadow-black/50"
        /> */}

      </section>

      <section className="relative -mt-32 pb-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm shadow-2xl shadow-black/50 group animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Browser window header */}
              <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="flex items-center gap-3 ml-4">
                    <Link href="#demo" className="text-sm text-ai-text-muted hover:text-white transition-colors">
                      Y-Axis Demo
                    </Link>
                    
                    {/* Controls beside the text */}
                    <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                      <button 
                        onClick={(e) => togglePlay(e)}
                        className="text-ai-text-muted hover:text-white transition-colors p-1"
                      >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                      </button>
                      <button 
                        onClick={(e) => toggleMute(e)}
                        className="text-ai-text-muted hover:text-white transition-colors p-1"
                      >
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Area - Clicking anywhere here toggles mute */}
              <div className="relative cursor-pointer" onClick={() => toggleMute()}>
                <video
                  ref={videoRef}
                  src="/assets/y-axis-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}