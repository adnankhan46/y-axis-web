import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-4 border-t border-white/5">
      <div className="container mx-auto">
        {/* Minimal Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-ai-text-muted mb-8">
          <Link href="#demo" className="hover:text-ai-accent transition-colors">Demo</Link>
          <Link href="/help" className="hover:text-ai-accent transition-colors">Help</Link>
          <Link href="#open-source" className="hover:text-ai-accent transition-colors">Open Source</Link>
          <Link href="/privacy-policy" className="hover:text-ai-accent transition-colors">Privacy Policy</Link>
          <a href="https://github.com/adnankhan46/y-axis" target="_blank" rel="noopener noreferrer" className="hover:text-ai-accent transition-colors flex items-center gap-1.5">
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-ai-text-muted text-xs mb-12">
          <p>© 2026 Y-Axis.</p>
        </div>

        {/* Giant Y-Axis Text */}
        <h2 className="text-[18vw] md:text-[14vw] font-medium tracking-tight text-center leading-none select-none text-white/10">
          <span className="font-serif italic text-ai-accent/50">Y</span>-<span className="font-serif italic text-ai-accent/50">A</span>x<span className="font-serif italic text-ai-accent/50">i</span>s
        </h2>
      </div>
    </footer>
  );
}
