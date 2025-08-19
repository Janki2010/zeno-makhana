import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import HealthBenefits from "@/components/HealthBenefits";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <HealthBenefits />
      <CallToAction />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🪷</span>
                </div>
                <span className="text-xl font-bold">LotusSeeds</span>
              </div>
              <p className="text-background/70 text-sm">
                Leading provider of premium lotus seeds. 
                World-class natural snacking.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Products</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>Vanilla Dream</div>
                <div>Chocolate Temptation</div>
                <div>Sea Salt</div>
                <div>Flavor Pack</div>
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
            © 2024 LotusSeeds. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
