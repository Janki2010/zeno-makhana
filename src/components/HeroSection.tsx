import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero pt-24 md:pt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 py-8 z-10">
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          {/* Brand Image Section */}
          <div className="relative w-full max-w-3xl lg:max-w-4xl">
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/04f49a39-2dd5-40d2-bec9-aca8322ba21a.png"
                alt="Zeno Makhana product range - Premium flavored healthy snacks with multiple varieties" 
                className="w-full h-auto rounded-2xl lg:rounded-3xl shadow-strong hover:scale-[1.02] transition-transform duration-500 object-contain"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse-soft" />
            
            {/* Floating makhana elements */}
            <div className="absolute top-4 right-4 text-2xl animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}>🤍</div>
            <div className="absolute bottom-8 right-8 text-xl animate-bounce opacity-60" style={{ animationDelay: '1s' }}>🤍</div>
            <div className="absolute top-1/2 -left-4 text-lg animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}>🤍</div>
          </div>

          {/* Content Section */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-4">
              
              <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                Zeno - {t('hero.title_1')} {t('hero.title_2')} {t('hero.title_3')}
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </div>
            
            
            {/* Health Benefits Bar */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>VEGAN</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>GLUTEN FREE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>HIGH PROTEIN</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-white/60 rounded-full" />
                <span>NATURAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;