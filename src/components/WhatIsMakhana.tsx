const WhatIsMakhana = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
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
              <div className="text-4xl animate-pulse-soft">🪷</div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>☀️</div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="text-4xl animate-pulse-soft" style={{ animationDelay: '1s' }}>🔥</div>
              <div className="w-8 h-0.5 bg-primary/30"></div>
              <div className="text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌿</div>
            </div>
            
            {/* Popping effect center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-6xl animate-scale-bounce opacity-80">💥</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground font-medium">
            <span>Harvest</span>
            <span>Sun-Dry</span>
            <span>Roast</span>
            <span>Flavor</span>
          </div>

          {/* Process Diagram */}
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              From Farm to Flavor: The Complete Process
            </h3>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <img 
                src="/lovable-uploads/ce654e30-a934-4b47-ac1f-0b544c291fef.png" 
                alt="Complete Makhana production process from harvesting to flavoring in 8 steps" 
                className="w-full max-w-3xl mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMakhana;