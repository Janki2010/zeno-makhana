import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'da' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/b151d2ea-7044-482f-a759-3fd9177e0404.png" 
              alt="Zeno Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#seeds-to-snack" className="text-foreground hover:text-primary transition-colors">
              {t('nav.seeds_to_snack')}
            </a>
            <a href="/#flavors" className="text-foreground hover:text-primary transition-colors">
              Flavors
            </a>
            <a href="/#webshop" className="text-foreground hover:text-primary transition-colors">
              {t('nav.webshop')}
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about_us')}
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.find_us')}
            </a>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;