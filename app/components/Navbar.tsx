import { Github, Download } from "lucide-react";
import Link from "next/link";
import { chromeWebStoreLink } from "@/utils";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass-panel rounded-lg px-6 py-3 flex items-center justify-between shadow-ai-modal">
        <Link href="/" className="flex items-center gap-2">
         
          <span className="font-semibold font-serif italic text-lg tracking-tight">Y-Axis</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ai-text-muted">
          <Link href="/#demo" className="hover:text-ai-accent transition-colors">Demo</Link>
          <Link href="/help" className="hover:text-ai-accent transition-colors">Help</Link>
          <Link href="/#open-source" className="hover:text-ai-accent transition-colors">Open Source</Link>
        </div>

        <button className="hidden sm:flex bg-ai-accent hover:bg-ai-accent/90 text-white text-sm font-medium px-5 py-2 rounded-xl transition-all hover:scale-105 active:scale-95 items-center gap-2 ">
          <Link href={chromeWebStoreLink} target="_blank" rel="noopener noreferrer" className=" transition-colors">

          Add to Chrome in 2 minutes</Link>
        </button>
        <button className="sm:hidden flex bg-ai-accent hover:bg-ai-accent/90 text-white text-sm font-medium px-5 py-2 rounded-xl transition-all hover:scale-105 active:scale-95 items-center gap-2">
          <Download size={16} />
          <Link href={chromeWebStoreLink} target="_blank" rel="noopener noreferrer" className=" transition-colors">Available for Desktop</Link>
        </button>
      </div>
    </nav>
  );
}
