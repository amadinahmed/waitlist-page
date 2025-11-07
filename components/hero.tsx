import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Calculator, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Badge className="rounded-full border-none bg-primary/10 text-primary hover:bg-primary/20 transition-all">
          <Calculator className="fill-current" />
          AI-Powered Accounting
        </Badge>
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !leading-[1.1] tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Meet Carlo: Your AI Accounting Agent
        </h1>
        <p className="mt-8 text-[17px] md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Revolutionize your accounting workflow with Carlo, an intelligent AI agent that automates bookkeeping, reconciliations, and financial reporting. Say goodbye to manual data entry.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="#waitlist" className="inline-block group">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 h-12 rounded-full px-8 text-base">
              Join the Waitlist <Sparkles className="ml-2 !h-5 !w-5 group-hover:rotate-12 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
