import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🪷</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              LotusSeeds
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#produkter" className="text-foreground hover:text-primary transition-colors">
              Produkter
            </a>
            <a href="#sundhed" className="text-foreground hover:text-primary transition-colors">
              Sundhed
            </a>
            <a href="#om-os" className="text-foreground hover:text-primary transition-colors">
              Om Os
            </a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button variant="hero" size="sm">
              Bestil Nu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;