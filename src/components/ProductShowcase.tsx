import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import cheddarCheeseImage from "@/assets/cheddar-cheese.png";
import creamOnionImage from "@/assets/cream-onion.png";
import saltPepperImage from "@/assets/salt-pepper.png";
import sweetChilliImage from "@/assets/sweet-chilli.png";
import piriPiriImage from "@/assets/piri-piri.png";

const ProductShowcase = () => {
  const flavors = [
    {
      name: "Cheddar Cheese Makhana",
      description: "Rich and savory cheddar cheese flavor that's irresistibly cheesy",
      color: "from-yellow-100 to-orange-50",
      textColor: "text-orange-800",
      popular: true,
      image: cheddarCheeseImage,
    },
    {
      name: "Cream & Onion Makhana",
      description: "Classic creamy onion flavor with a perfect balance of herbs",
      color: "from-green-100 to-emerald-50",
      textColor: "text-green-800",
      popular: false,
      image: creamOnionImage,
    },
    {
      name: "Himalayan Salt & Pepper Makhana",
      description: "Simple yet flavorful combination of sea salt and cracked pepper",
      color: "from-gray-100 to-slate-50",
      textColor: "text-slate-800",
      popular: false,
      image: saltPepperImage,
    },
    {
      name: "Sweet Chilli Makhana",
      description: "Perfect blend of sweet and spicy with a tantalizing chilli kick",
      color: "from-red-100 to-pink-50",
      textColor: "text-red-800",
      popular: false,
      image: sweetChilliImage,
    },
    {
      name: "Piri Piri Makhana",
      description: "Fiery and bold Portuguese-inspired piri piri spice blend",
      color: "from-orange-100 to-red-50",
      textColor: "text-red-800",
      popular: false,
      image: piriPiriImage,
    },
  ];

  return (
    <section id="flavors" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 text-accent-foreground text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Our Flavor Family</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Five Unique
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Taste Experiences
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each Makhana flavor is carefully crafted to give you the perfect balance 
            between health and indulgence.
          </p>
        </div>

        {/* Flavor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {flavors.map((flavor, index) => (
            <Card 
              key={flavor.name} 
              className="relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 bg-background"
            >
              {flavor.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                  POPULAR
                </div>
              )}
              
              {/* Product Image */}
              <div className="aspect-square p-4">
                <img 
                  src={flavor.image} 
                  alt={`${flavor.name} product package`} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {flavor.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {flavor.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;