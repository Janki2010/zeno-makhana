import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/1253bd5d-37ed-47d2-9377-3343db34fef0.png" 
              alt="Zeno Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="/#health" className="text-foreground hover:text-primary transition-colors">
              Health
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;