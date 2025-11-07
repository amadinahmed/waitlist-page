const About = () => {
  return (
    <>
      {/* Hero Image Placeholder */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Product Screenshot / Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-medium text-primary">How It Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
                Intelligent accounting, simplified
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Carlo understands your business context and handles complex accounting tasks with precision. From transaction categorization to financial reporting, everything is automated.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Smart Processing</h3>
                  <p className="text-muted-foreground">
                    Advanced AI categorizes transactions and detects anomalies automatically.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Real-time Insights</h3>
                  <p className="text-muted-foreground">
                    Get instant financial reports and actionable insights whenever you need them.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Always Available</h3>
                  <p className="text-muted-foreground">
                    Your AI agent works 24/7, handling tasks around the clock.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
