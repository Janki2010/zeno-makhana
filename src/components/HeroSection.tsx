import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lotus-seeds.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft" />
                <span>Naturlig • Sund • Lækker</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Smag
                <span className="block text-white/90">Naturens</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Perfektion
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
                Oplev vores smagfulde lotus seeds - den perfekte sunde snack fra naturens eget apotek. 
                Rig på næringsstoffer og fantastisk i smag.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 h-auto"
              >
                Bestil Nu
              </Button>
              <Button 
                variant="minimal" 
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Læs Mere
              </Button>
            </div>
            
            {/* Health Benefits Bar */}
            <div className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>VEGANSK</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>GLUTENFRI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>RIG PÅ PROTEIN</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>NATURLIG</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="Smukke lotus seeds i forskellige smage" 
                className="w-full h-auto rounded-3xl shadow-strong"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse-soft" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium">SCROLL</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-white/60 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;