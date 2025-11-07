const Features = () => {
  const features = [
    {
      title: "Automated Bookkeeping",
      description:
        "Automatically categorize transactions, reconcile accounts, and maintain accurate records.",
    },
    {
      title: "Intelligent Invoicing",
      description:
        "Generate, send, and track invoices with smart reminders for overdue payments.",
    },
    {
      title: "Financial Reporting",
      description:
        "Get instant P&L statements, balance sheets, and cash flow reports with visual analytics.",
    },
    {
      title: "Tax Optimization",
      description:
        "Identify deductions and prepare tax-ready reports to maximize your savings.",
    },
    {
      title: "Compliance & Security",
      description:
        "Stay compliant with accounting standards and enterprise-grade security.",
    },
    {
      title: "Time-saving Automation",
      description:
        "Reduce hours of manual work to minutes with AI that learns your patterns.",
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
            Everything you need to manage<br />your finances
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Carlo handles the complexities of accounting so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-medium text-lg">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
