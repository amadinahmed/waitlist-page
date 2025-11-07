import About from "@/components/about";
import Features from "@/components/experience";
import Hero from "@/components/hero";
import Waitlist from "@/components/waitlist";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Features />
      <Waitlist />
    </div>
  );
}
