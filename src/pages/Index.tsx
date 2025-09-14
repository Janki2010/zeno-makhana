import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsMakhana from "@/components/WhatIsMakhana";
import WhyZeno from "@/components/WhyZeno";
import ProductShowcase from "@/components/ProductShowcase";
import HealthBenefits from "@/components/HealthBenefits";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatIsMakhana />
      <WhyZeno />
      <ProductShowcase />
      <HealthBenefits />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Zeno</span>
              </div>
              <p className="text-background/70 text-sm">
                {t('footer.description')}
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            
            <div className="space-y-4">
              <h3 className="font-semibold">{t('footer.products')}</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>{t('footer.product_cheddar')}</div>
                <div>{t('footer.product_cream_onion')}</div>
                <div>{t('footer.product_salt_pepper')}</div>
                <div>{t('footer.product_sweet_chilli')}</div>
                <div>{t('footer.product_piri_piri')}</div>
              </div>
            </div>
            
            
            <div className="space-y-4">
              <h3 className="font-semibold">{t('footer.contact')}</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>info@zeno.com</div>
                <div>+45 12345678</div>
                <div>Copenhagen, Denmark</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
