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

  const processSteps = [
    { 
      image: harvestingImage, 
      title: t('makhana.step_harvesting'), 
      desc: t('makhana.desc_harvesting'), 
      step: "01"
    },
    { 
      image: collectingImage, 
      title: t('makhana.step_collecting'), 
      desc: t('makhana.desc_collecting'), 
      step: "02"
    },
    { 
      image: cleaningImage, 
      title: t('makhana.step_cleaning'), 
      desc: t('makhana.desc_cleaning'), 
      step: "03"
    },
    { 
      image: dryingImage, 
      title: t('makhana.step_drying'), 
      desc: t('makhana.desc_drying'), 
      step: "04"
    },
    { 
      image: poppingImage, 
      title: t('makhana.step_popping'), 
      desc: t('makhana.desc_popping'), 
      step: "05"
    },
    { 
      image: sortingImage, 
      title: t('makhana.step_sorting'), 
      desc: t('makhana.desc_sorting'), 
      step: "06"
    },
    { 
      image: polishingImage, 
      title: t('makhana.step_polishing'), 
      desc: t('makhana.desc_polishing'), 
      step: "07"
    },
    { 
      image: flavoringImage, 
      title: t('makhana.step_flavoring'), 
      desc: t('makhana.desc_flavoring'), 
      step: "08"
    }
  ];

  return (
    <section id="seeds-to-snack" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
            Zeno Makhana - From Seeds to Snack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('makhana.description_1')}
          </p>
        </div>

        {/* Process Steps - Alternating Layout */}
        <div className="space-y-24 lg:space-y-32">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Section */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-strong">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Step Number Overlay */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -z-10 top-8 ${isEven ? '-right-8' : '-left-8'} w-32 h-32 bg-primary/10 rounded-full blur-2xl`} />
                  <div className={`absolute -z-10 -bottom-8 ${isEven ? '-left-8' : '-right-8'} w-24 h-24 bg-secondary/10 rounded-full blur-xl`} />
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-0.5 bg-primary rounded-full" />
                      <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Step {step.step}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Process Icon */}
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                    <span className="text-sm text-muted-foreground font-medium">
                      {index < processSteps.length - 1 ? 'Next: ' + processSteps[index + 1].title : 'Ready to enjoy!'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Summary */}
        <div className="mt-24 text-center space-y-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              The Perfect Healthy Snack
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🌱", label: "100% Natural" },
                { icon: "💪", label: "High Protein" },
                { icon: "⚡", label: "Low Calorie" },
                { icon: "🍿", label: "5 Flavors" }
              ].map((benefit, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <div className="text-sm font-semibold text-foreground">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMakhana;