import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-accent/20">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 rounded-full">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Intelligent Accounting, Automated
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Carlo combines advanced AI with deep accounting expertise to handle your financial tasks with precision and speed. Built on cutting-edge language models, it understands context, learns from your business, and adapts to your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Processing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advanced AI understands your transactions, categorizes expenses, and detects anomalies automatically.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Insights</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Get instant financial reports, cash flow analysis, and actionable insights whenever you need them.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-background/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your AI accounting agent never sleeps, handling tasks and answering questions around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
