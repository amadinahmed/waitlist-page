import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 inset-x-0 h-16 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-4">
          <a href="#waitlist" className="hidden sm:block">
            <Button className="rounded-lg h-9">
              Join Waitlist
            </Button>
          </a>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
