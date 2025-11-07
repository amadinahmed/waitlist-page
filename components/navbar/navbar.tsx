import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-lg border border-border/40 shadow-lg shadow-black/5 max-w-screen-md mx-auto rounded-full transition-all">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <a href="#waitlist" className="hidden sm:block">
            <Button className="rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
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
