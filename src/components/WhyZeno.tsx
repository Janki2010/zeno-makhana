import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Shield, Award } from "lucide-react";

const WhyZeno = () => {
  const reasons = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Nutrition First",
      description: "Every Zeno Makhana is packed with protein, fiber, and essential minerals while being naturally gluten-free and low in calories.",
      highlight: "20g protein per serving"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Taste Innovation",
      description: "We've mastered the art of creating bold, satisfying flavors that make healthy snacking exciting and craveable.",
      highlight: "5 unique flavors"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality Promise",
      description: "From lotus pond to your pantry, we ensure every step meets the highest standards for purity and freshness.",
      highlight: "100% natural"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Heritage Expertise",
      description: "Combining traditional Indian harvesting wisdom with modern European food innovation for the perfect snack.",
      highlight: "500+ years tradition"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            The Zeno Difference
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Why Choose Zeno?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe healthy snacking shouldn't mean compromising on taste. 
            That's why we've perfected the balance between nutrition and flavor, 
            creating Makhana that satisfies both your body and your taste buds.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover-scale group">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {reason.description}
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {reason.highlight}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">The Perfect Balance</h3>
            <p className="text-muted-foreground max-w-2xl">
              At Zeno, we don't believe in choosing between health and taste. 
              Our Makhana delivers complete nutrition wrapped in irresistible flavors, 
              proving that the best snacks satisfy both your cravings and your wellness goals.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyZeno;