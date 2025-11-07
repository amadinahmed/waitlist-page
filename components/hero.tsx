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
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Calculator className="fill-current" />
          AI-Powered Accounting
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Meet Claude Code: Your AI Accounting Agent
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Revolutionize your accounting workflow with Claude Code, an intelligent AI agent that automates bookkeeping, reconciliations, and financial reporting. Say goodbye to manual data entry and hello to accurate, efficient accounting powered by cutting-edge AI.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="#waitlist" className="inline-block">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 rounded-full px-8 text-base">
              Join the Waitlist <Sparkles className="ml-2 !h-5 !w-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
