import { Badge } from "@/components/ui/badge";
import {
  FileText,
  TrendingUp,
  Shield,
  Clock,
  Receipt,
  PieChart,
  type LucideIcon
} from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-accent/30 border border-accent/50 hover:bg-accent/50 transition-colors">
      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Receipt,
      title: "Automated Bookkeeping",
      description:
        "Automatically categorize transactions, reconcile accounts, and maintain accurate records without manual data entry.",
    },
    {
      icon: FileText,
      title: "Intelligent Invoicing",
      description:
        "Generate, send, and track invoices with smart reminders and automated follow-ups for overdue payments.",
    },
    {
      icon: PieChart,
      title: "Financial Reporting",
      description:
        "Get instant P&L statements, balance sheets, and cash flow reports with visual analytics and trend insights.",
    },
    {
      icon: TrendingUp,
      title: "Tax Optimization",
      description:
        "Identify deductions, track expenses by category, and prepare tax-ready reports to maximize your savings.",
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description:
        "Stay compliant with accounting standards while your data is encrypted and protected with enterprise-grade security.",
    },
    {
      icon: Clock,
      title: "Time-saving Automation",
      description:
        "Reduce hours of manual work to minutes with AI that learns your business patterns and preferences.",
    },
  ];

  return (
    <section id="features" className="relative py-20 px-6 bg-accent/10">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need to Manage Your Finances
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Claude Code handles the complexities of accounting so you can focus on growing your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
