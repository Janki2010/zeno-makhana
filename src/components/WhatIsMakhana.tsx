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
          </div>

          {/* Visual Elements */}
          <div className="flex justify-center items-center gap-8 pt-8">
            <div className="text-4xl">🪷</div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="text-4xl">☀️</div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="text-4xl">🔥</div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="text-4xl">🌿</div>
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
            
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Our makhana goes through a meticulous 8-step traditional process: from harvesting lotus plants in pristine water bodies, 
              collecting the precious seeds, careful cleaning and sun-drying, to the art of popping, sorting, polishing, and finally 
              adding our signature natural flavors. Each step is crafted to preserve the nutritional value while creating the perfect crunch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMakhana;