import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-ai-accent/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <OpenSource />
      <Footer />
    </main>
  );
}



