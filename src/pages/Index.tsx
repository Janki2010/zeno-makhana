import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsMakhana from "@/components/WhatIsMakhana";
import ProductShowcase from "@/components/ProductShowcase";
import HealthBenefits from "@/components/HealthBenefits";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatIsMakhana />
      <ProductShowcase />
      <HealthBenefits />
      <CallToAction />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
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
              <h3 className="font-semibold">Information</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>About Us</div>
                <div>Nutrition</div>
                <div>Shipping</div>
                <div>Returns</div>
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
            © 2024 Zeno. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
