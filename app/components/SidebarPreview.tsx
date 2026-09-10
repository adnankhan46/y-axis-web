"use client";

import { Download, Search, User, CheckCircle2, Computer } from "lucide-react";
import { useEffect, useState } from "react";

type ItemType = "user" | "assistant" | "heading" | "check";

interface SidebarItem {
  id: number;
  type: ItemType;
  label: string;
  indent?: boolean;
}

const items: SidebarItem[] = [
  { id: 0, type: "user", label: "Explain React Server Components" },
  { id: 1, type: "assistant", label: "Let's build this from zero" },
  { id: 2, type: "heading", label: "PART 1 — What are RSCs?" },
  { id: 3, type: "check", label: "Server vs. client boundary", indent: true },
  { id: 4, type: "heading", label: "PART 2 — Data fetching" },
  { id: 5, type: "check", label: "Streaming with Suspense", indent: true },
  { id: 6, type: "user", label: "What about caching?" },
];

// Rows the highlight cycles through — showing the core feature live:
// jumping straight to any point in a long chat.
const cycle = [1, 3, 4, 6];

const icons: Record<ItemType, React.ReactNode> = {
  user: (
    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/25 text-white/60">
      <User className="h-2.5 w-2.5" />
    </span>
  ),
  assistant: (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ai-accent/20 text-ai-accent">
      <Computer className="h-2.5 w-2.5" />
    </span>
  ),
  check: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80" />,
  heading: <span className="h-3.5 w-3.5" />,
};

export default function SidebarPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % cycle.length), 2200);
    return () => clearInterval(id);
  }, []);

  const activeId = cycle[step];

  return (
    <div className="hidden lg:flex flex-col w-[280px] h-[400px] absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b0d]/95 backdrop-blur-sm shadow-2xl shadow-black/60">
      <div className="h-[3px] bg-gradient-to-r from-ai-accent via-ai-accent/60 to-transparent" />

      {/* header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <Download className="h-3.5 w-3.5 text-white/50" />
          <span className="text-sm font-semibold text-white/90">Y-Axis</span>
        </div>
        <div className="flex gap-2">

        <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-medium text-black">
          Only Prompts
        </span>
        <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-medium text-black">
          All
        </span>
        </div>
      </div>

      {/* search */}
      <div className="mx-4 mb-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <Search className="h-3.5 w-3.5 text-white/35" />
        <span className="text-xs text-white/35">Filter...</span>
      </div>

      <div className="mx-4 h-px bg-white/10" />

      {/* list */}
      <ul className="flex flex-col gap-[2px] px-2 py-2">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li
              key={item.id}
              className={`relative flex items-center gap-2 rounded-md py-1.5 pr-2 transition-colors duration-500 ${
                item.indent ? "pl-8" : "pl-3"
              } ${active ? "bg-ai-accent/10" : ""}`}
            >
              <span
                className={`absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-ai-accent transition-opacity duration-500 ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              />
              {icons[item.type]}
              <span
                className={`truncate text-[11.5px] transition-colors duration-500 ${
                  active ? "text-white" : "text-white/55"
                } ${item.type === "heading" ? "font-medium text-white/75" : ""}`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}