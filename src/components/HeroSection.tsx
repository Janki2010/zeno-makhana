import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center space-y-12">
          {/* Brand Image Section */}
          <div className="relative w-full max-w-4xl">
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/04f49a39-2dd5-40d2-bec9-aca8322ba21a.png"
                alt="Zeno Makhana product range - Premium flavored healthy snacks with multiple varieties" 
                className="w-full h-auto rounded-3xl shadow-strong hover:scale-105 transition-transform duration-500"
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
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft" />
                <span>{t('hero.badge')}</span>
              </div>
              
              <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                <span className="block">Zeno - {t('hero.title_1')}</span>
                <span className="block text-white/90">{t('hero.title_2')}</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {t('hero.title_3')}
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </div>
            
            {/* Dynamic Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              {[
                { number: "100%", label: t('hero.stat_natural'), icon: "🌱" },
                { number: "20g", label: t('hero.stat_protein'), icon: "💪" },
                { number: "5+", label: t('hero.stat_flavors'), icon: "🎨" },
                { number: "89", label: t('hero.stat_calories'), icon: "⚡" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-medium">{t('hero.scroll')}</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-white/60 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;