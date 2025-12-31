import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OpenSource from "./components/OpenSource";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-ai-accent/30 overflow-x-hidden">
      {/* <div className="w-full font-sans bg-white h-6 text-black text-center text-sm flex items-center justify-center">We are Live on Product Hunt</div> */}
      <Navbar/>
      <Hero />
      <OpenSource />
    </main>
  );
}



