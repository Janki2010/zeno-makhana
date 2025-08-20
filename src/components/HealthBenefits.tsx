import { Card, CardContent, CardHeader } from "@/components/ui/card";

const HealthBenefits = () => {
  const benefits = [
    {
      icon: "🌱",
      title: "Rich in Protein",
      description: "Up to 20g protein per 100g - perfect for active lifestyles",
      stat: "20g",
      statLabel: "protein per 100g"
    },
    {
      icon: "💚",
      title: "Natural Fiber",
      description: "Supports digestion and keeps you full longer",
      stat: "14g",
      statLabel: "fiber per 100g"
    },
    {
      icon: "⚡",
      title: "Low in Calories",
      description: "Only 89 calories per serving - guilt-free snacking",
      stat: "89",
      statLabel: "calories per serving"
    },
    {
      icon: "🧠",
      title: "Magnesium & Phosphorus",
      description: "Essential minerals for brain and muscle function",
      stat: "100%",
      statLabel: "natural minerals"
    }
  ];

  const certifications = [
    { label: "VEGAN", icon: "🌿" },
    { label: "GLUTEN FREE", icon: "🌾" },
    { label: "NON-GMO", icon: "🧬" },
    { label: "ORGANIC", icon: "🍃" }
  ];

  return (
    <section className="py-24 gradient-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 text-foreground text-sm font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
            <span>Health & Nutrition</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-foreground">
            Nature's Own
            <span className="block text-accent-foreground/80">
              Superfood
            </span>
          </h2>
          
          <p className="text-lg text-accent-foreground/70 max-w-2xl mx-auto">
            Makhana has been treasured for thousands of years for their incredible health benefits. 
            Now you can enjoy them in modern, delicious varieties.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2 group-hover:animate-bounce">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-card-foreground">
                  {benefit.title}
                </h3>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                <div className="pt-2 border-t border-border/50">
                  <div className="text-2xl font-bold text-primary">
                    {benefit.stat}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {benefit.statLabel}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center space-y-8">
          <h3 className="text-xl font-semibold text-accent-foreground">
            Certified Quality
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.label}
                className="flex items-center gap-3 bg-background/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-xl">{cert.icon}</span>
                <span className="font-medium text-foreground text-sm">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-accent-foreground/60 text-sm max-w-xl mx-auto">
            All our products are certified and meet the highest international quality standards
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;