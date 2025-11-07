import { Separator } from "@/components/ui/separator";
import { Calculator } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "How It Works",
    href: "#about",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Join Waitlist",
    href: "#waitlist",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <span className="font-semibold text-xl">Carlo</span>
          </div>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col items-center justify-center gap-2 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Carlo. All rights reserved.
          </span>
          <span className="text-muted-foreground text-xs">
            AI-Powered Accounting Agent
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
