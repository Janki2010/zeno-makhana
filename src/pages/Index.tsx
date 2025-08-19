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
                Danmarks førende udbyder af premium lotus seeds. 
                Naturlig snacking i verdensklasse.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Produkter</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>Vanilje Drøm</div>
                <div>Chokolade Fristelse</div>
                <div>Havets Salt</div>
                <div>Smagspakke</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Information</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>Om Os</div>
                <div>Næringsstoffer</div>
                <div>Levering</div>
                <div>Returret</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Kontakt</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>hej@lotusseeds.dk</div>
                <div>+45 12 34 56 78</div>
                <div>København, Danmark</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2024 LotusSeeds. Alle rettigheder forbeholdes.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
