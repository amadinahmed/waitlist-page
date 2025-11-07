"use client";

import { Button } from "@/components/ui/button";
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
    <section id="waitlist" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary">Join Waitlist</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
            Get early access
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join the waitlist to be notified when Carlo launches.
          </p>

          {submitted ? (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">You&apos;re on the list</h3>
              <p className="text-muted-foreground text-center max-w-sm">
                We&apos;ll notify you when Carlo is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-lg h-12 px-6"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
