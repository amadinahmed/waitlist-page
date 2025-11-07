import { Calculator } from "lucide-react";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
      <Calculator className="h-5 w-5 text-primary" />
    </div>
    <span className="font-semibold text-lg">Claude Code</span>
  </div>
);
