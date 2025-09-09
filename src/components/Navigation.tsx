import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/b151d2ea-7044-482f-a759-3fd9177e0404.png" 
              alt="Zeno Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#flavours" className="text-foreground hover:text-primary transition-colors">
              Flavours
            </a>
            <a href="/#webshop" className="text-foreground hover:text-primary transition-colors">
              Webshop
            </a>
            <a href="/#seeds-to-snack" className="text-foreground hover:text-primary transition-colors">
              Zeno Makhana – seeds to snack
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Find Us
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;