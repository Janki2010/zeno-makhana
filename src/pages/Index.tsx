import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsMakhana from "@/components/WhatIsMakhana";
import WhyZeno from "@/components/WhyZeno";
import OurStory from "@/components/OurStory";
import ProductShowcase from "@/components/ProductShowcase";
import HealthBenefits from "@/components/HealthBenefits";
import CallToAction from "@/components/CallToAction";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatIsMakhana />
      <WhyZeno />
      <OurStory />
      <ProductShowcase />
      <HealthBenefits />
      <CallToAction />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Zeno</span>
              </div>
              <p className="text-background/70 text-sm">
                Leading provider of premium Makhana. 
                World-class natural snacking.
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
              <h3 className="font-semibold">Products</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>Cheddar Cheese Makhana</div>
                <div>Cream & Onion Makhana</div>
                <div>Salt & Pepper Makhana</div>
                <div>Sweet Chilli Makhana</div>
                <div>Piri Piri Makhana</div>
              </div>
            </div>
            
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>hello@lotusseeds.com</div>
                <div>+1 (555) 123-4567</div>
                <div>New York, USA</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2025 Zeno. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
