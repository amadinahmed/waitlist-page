import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Intelligent Accounting, Automated
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Claude Code combines advanced AI with deep accounting expertise to handle your financial tasks with precision and speed. Built on cutting-edge language models, it understands context, learns from your business, and adapts to your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Processing</h3>
              <p className="text-muted-foreground text-sm">
                Advanced AI understands your transactions, categorizes expenses, and detects anomalies automatically.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Insights</h3>
              <p className="text-muted-foreground text-sm">
                Get instant financial reports, cash flow analysis, and actionable insights whenever you need them.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground text-sm">
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
