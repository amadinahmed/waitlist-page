"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  return (
    <section id="waitlist" className="relative py-24 px-6">
      <div className="max-w-screen-sm mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 rounded-full">
            Join the Waitlist
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Be the First to Experience AI-Powered Accounting
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Get early access to Carlo and transform the way you manage your finances. Limited spots available for our beta launch.
          </p>

          {submitted ? (
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-10 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/10">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">You&apos;re on the list!</h3>
              <p className="text-muted-foreground text-center max-w-sm leading-relaxed">
                Thank you for joining. We&apos;ll notify you as soon as Carlo is ready for you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-pulse">Joining...</span>
                  </>
                ) : (
                  <>
                    Join Waitlist
                  </>
                )}
              </Button>
            </form>
          )}

          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            No spam, ever. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
