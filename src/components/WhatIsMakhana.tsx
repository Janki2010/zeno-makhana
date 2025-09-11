import { Flower2, Sun, Zap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import process images
import harvestingImage from "@/assets/process-harvesting.jpg";
import collectingImage from "@/assets/process-collecting.jpg";
import cleaningImage from "@/assets/process-cleaning.jpg";
import dryingImage from "@/assets/process-drying.jpg";
import poppingImage from "@/assets/process-popping.jpg";
import sortingImage from "@/assets/process-sorting.jpg";
import polishingImage from "@/assets/process-polishing.jpg";
import flavoringImage from "@/assets/process-flavoring.jpg";

const WhatIsMakhana = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Zeno Makhana - From Seeds to Snack
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              {t('makhana.description_1')}
            </p>
            
            
            <p>
              {t('makhana.description_2')}
            </p>
            
            <p>
              {t('makhana.description_3')}
            </p>
            
            <p className="text-foreground font-medium">
              {t('makhana.description_4')}
            </p>
            
            <p>
              {t('makhana.description_5')}
            </p>
          </div>

          {/* Popping Makhana Animation */}
          <div className="relative py-12">
            {/* Animated makhana seeds popping */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-bounce text-2xl opacity-70`}
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${20 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + (i % 2)}s`
                  }}
                >
                  🤍
                </div>
              ))}
            </div>
            
            {/* Process visualization */}
            <div className="relative z-10 flex justify-center items-center gap-8">
              <div className="text-primary animate-pulse-soft"><Flower2 size={36} /></div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="text-primary animate-bounce" style={{ animationDelay: '0.5s' }}><Sun size={36} /></div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="text-primary animate-pulse-soft" style={{ animationDelay: '1s' }}><Zap size={36} /></div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="text-primary animate-bounce" style={{ animationDelay: '1.5s' }}><Leaf size={36} /></div>
            </div>
            
            {/* Popping effect center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-primary animate-scale-bounce opacity-80"><Zap size={60} /></div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground font-medium">
            <span>{t('makhana.process_harvest')}</span>
            <span>{t('makhana.process_sundry')}</span>
            <span>{t('makhana.process_roast')}</span>
            <span>{t('makhana.process_flavor')}</span>
          </div>

          {/* Animated Process Flow */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              {t('makhana.process_title')}
            </h3>
            
              <div className="bg-card rounded-2xl p-8 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {[
                    { image: harvestingImage, title: t('makhana.step_harvesting'), desc: t('makhana.desc_harvesting'), delay: "0s" },
                    { image: collectingImage, title: t('makhana.step_collecting'), desc: t('makhana.desc_collecting'), delay: "0.5s" },
                    { image: cleaningImage, title: t('makhana.step_cleaning'), desc: t('makhana.desc_cleaning'), delay: "1s" },
                    { image: dryingImage, title: t('makhana.step_drying'), desc: t('makhana.desc_drying'), delay: "1.5s" },
                    { image: poppingImage, title: t('makhana.step_popping'), desc: t('makhana.desc_popping'), delay: "2s" },
                    { image: sortingImage, title: t('makhana.step_sorting'), desc: t('makhana.desc_sorting'), delay: "2.5s" },
                    { image: polishingImage, title: t('makhana.step_polishing'), desc: t('makhana.desc_polishing'), delay: "3s" },
                    { image: flavoringImage, title: t('makhana.step_flavoring'), desc: t('makhana.desc_flavoring'), delay: "3.5s" }
                  ].map((step, index) => (
                  <div 
                    key={index}
                    className={`relative flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-background/50 border border-border/50 animate-fade-in group hover:scale-105 transition-transform duration-300 ${index >= 4 ? 'md:col-span-1' : ''}`}
                    style={{ animationDelay: step.delay }}
                  >
                    {/* Step number */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-bold animate-pulse-soft" style={{ animationDelay: step.delay }}>
                      {index + 1}
                    </div>
                    
                    {/* Image with animation */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-md" style={{ animationDelay: step.delay }}>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Title and description */}
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                    
                    {/* Connecting arrow (except for last item) */}
                    {index < 7 && (
                      <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-primary/50 animate-pulse-soft" style={{ animationDelay: `${parseFloat(step.delay) + 0.2}s` }}>
                        →
                      </div>
                    )}
                    
                    {/* Mobile connecting arrow (vertical) */}
                    {index < 7 && (
                      <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-primary/50 rotate-90 animate-pulse-soft" style={{ animationDelay: `${parseFloat(step.delay) + 0.2}s` }}>
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Flowing particles animation */}
              <div className="relative mt-8 h-2 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-soft opacity-60"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-primary/50 to-transparent animate-[slide-in-right_4s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMakhana;