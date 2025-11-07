const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20">
      <div className="relative z-[1] text-center max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-sm font-medium text-primary bg-primary/5 px-4 py-2 rounded-full">
            AI-Powered Accounting
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold !leading-[1.1] tracking-tight text-foreground mb-8">
          Meet Carlo
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light mb-12">
          Your AI accounting agent that automates bookkeeping, reconciliations, and financial reporting—so you can focus on what matters.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#waitlist">
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-lg px-8 text-base">
              Join Waitlist
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
