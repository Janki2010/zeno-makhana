import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,70,159,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,70,159,0.1)_0%,transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-0 shadow-strong overflow-hidden">
            <CardContent className="p-12 text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                  <span>Gratis Levering til hele Danmark</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Klar til at
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Transformere
                  </span>
                  Din Snack-Oplevelse?
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Bestil nu og få din første smagspakke med alle tre varianter. 
                  100% tilfredsstillsesgaranti eller pengene tilbage.
                </p>
              </div>

              {/* Offer Details */}
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="space-y-2">
                  <div className="text-2xl">📦</div>
                  <h3 className="font-semibold text-foreground">Gratis Levering</h3>
                  <p className="text-sm text-muted-foreground">Til hele Danmark på ordrer over 200 kr</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">💯</div>
                  <h3 className="font-semibold text-foreground">30 Dages Garanti</h3>
                  <p className="text-sm text-muted-foreground">Ikke tilfreds? Få pengene retur</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🏆</div>
                  <h3 className="font-semibold text-foreground">Premium Kvalitet</h3>
                  <p className="text-sm text-muted-foreground">Håndplukkede lotus seeds af højeste kvalitet</p>
                </div>
              </div>

              {/* Special Offer */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="space-y-3">
                  <div className="text-primary font-bold text-sm uppercase tracking-wide">
                    🎉 Introduktionstilbud
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    Spar 25% på din første ordre
                  </div>
                  <div className="text-muted-foreground">
                    Brug koden <span className="font-mono font-bold text-primary">LOTUS25</span> ved checkout
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg px-10 py-6 h-auto"
                >
                  Bestil Nu - Kun 149 kr
                </Button>
                <Button 
                  variant="minimal" 
                  size="lg"
                  className="text-lg px-10 py-6 h-auto"
                >
                  Kontakt Os
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full" />
                  </div>
                  <span>SSL Sikret Betaling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full" />
                  </div>
                  <span>Dansk Kundeservice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full" />
                  </div>
                  <span>Hurtig Levering</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;