import { Flower2, Sun, Zap, Leaf } from "lucide-react";

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
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              <span>Discover</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              What is
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Makhana?
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Makhana is made from the seeds of the Euryale ferox plant, which grows in water bodies like ponds.
            </p>
            
            
            <p>
              These seeds are also known as Lotus seeds, Euryale Ferox, fox nuts or gorgon nut.
            </p>
            
            <p>
              They are harvested, sun-dried and popped — kind of like popcorn, but crunchier and much healthier.
            </p>
            
            <p className="text-foreground font-medium">
              At Zeno, we roast them and add exciting natural flavours to create the perfect and healthy snack.
            </p>
            
            <p>
              Our makhana goes through a meticulous 8-step traditional process: from harvesting lotus plants in pristine water bodies, 
              collecting the precious seeds, careful cleaning and sun-drying, to the art of popping, sorting, polishing, and finally 
              adding our signature natural flavors. Each step is crafted to preserve the nutritional value while creating the perfect crunch.
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
            <span>Harvest</span>
            <span>Sun-Dry</span>
            <span>Roast</span>
            <span>Flavor</span>
          </div>

          {/* Animated Process Flow */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              From Farm to Flavor: The Complete Process
            </h3>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { image: harvestingImage, title: "Harvesting", desc: "Fresh lotus plants from pristine waters", delay: "0s" },
                  { image: collectingImage, title: "Collecting", desc: "Precious seeds carefully gathered", delay: "0.5s" },
                  { image: cleaningImage, title: "Cleaning", desc: "Thorough washing and preparation", delay: "1s" },
                  { image: dryingImage, title: "Sun-Drying", desc: "Natural drying under sunlight", delay: "1.5s" },
                  { image: poppingImage, title: "Popping", desc: "Traditional popping technique", delay: "2s" },
                  { image: sortingImage, title: "Sorting", desc: "Quality selection process", delay: "2.5s" },
                  { image: polishingImage, title: "Polishing", desc: "Perfect finish and texture", delay: "3s" },
                  { image: flavoringImage, title: "Flavoring", desc: "Natural signature flavors added", delay: "3.5s" }
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