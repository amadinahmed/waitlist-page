"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
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
    <section id="waitlist" className="relative py-20 px-6">
      <div className="max-w-screen-sm mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Join the Waitlist
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Be the First to Experience AI-Powered Accounting
          </h2>
          <p className="text-muted-foreground mb-8">
            Get early access to Claude Code and transform the way you manage your finances. Limited spots available for our beta launch.
          </p>

          {submitted ? (
            <div className="bg-accent/50 border border-accent rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">You&apos;re on the list!</h3>
              <p className="text-muted-foreground text-center">
                Thank you for joining. We&apos;ll notify you as soon as Claude Code is ready for you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-full border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="rounded-full text-base"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            No spam, ever. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
