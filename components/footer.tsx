import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-lg">Carlo</span>
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">
            Waitlist
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
