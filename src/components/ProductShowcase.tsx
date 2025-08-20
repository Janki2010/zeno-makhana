import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productImage from "@/assets/product-flavors.jpg";

const ProductShowcase = () => {
  const flavors = [
    {
      name: "Cheddar Cheese Makhana",
      description: "Rich and savory cheddar cheese flavor that's irresistibly cheesy",
      color: "from-yellow-100 to-orange-50",
      textColor: "text-orange-800",
      popular: true,
    },
    {
      name: "Cream & Onion Makhana",
      description: "Classic creamy onion flavor with a perfect balance of herbs",
      color: "from-green-100 to-emerald-50",
      textColor: "text-green-800",
      popular: false,
    },
    {
      name: "Salt & Pepper Makhana",
      description: "Simple yet flavorful combination of sea salt and cracked pepper",
      color: "from-gray-100 to-slate-50",
      textColor: "text-slate-800",
      popular: false,
    },
    {
      name: "Sweet Chilli Makhana",
      description: "Perfect blend of sweet and spicy with a tantalizing chilli kick",
      color: "from-red-100 to-pink-50",
      textColor: "text-red-800",
      popular: false,
    },
    {
      name: "Piri Piri Makhana",
      description: "Fiery and bold Portuguese-inspired piri piri spice blend",
      color: "from-orange-100 to-red-50",
      textColor: "text-red-800",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 text-accent-foreground text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Our Flavor Family</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Three Unique
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Taste Experiences
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each Makhana flavor is carefully crafted to give you the perfect balance 
            between health and indulgence.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={productImage} 
                alt="Makhana products in different flavors" 
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-accent rounded-full blur-2xl opacity-30" />
          </div>

          {/* Flavor Cards */}
          <div className="space-y-6">
            {flavors.map((flavor, index) => (
              <Card 
                key={flavor.name} 
                className={`relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r ${flavor.color}`}
              >
                {flavor.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className={`text-xl font-bold ${flavor.textColor}`}>
                        {flavor.name}
                      </h3>
                      <p className={`${flavor.textColor}/80 text-sm leading-relaxed`}>
                        {flavor.description}
                      </p>
                    </div>
                    
                    <div className={`w-12 h-12 rounded-full ${flavor.color} border-2 border-${flavor.textColor}/20 ml-4`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to try all flavors?
          </h3>
          <p className="text-muted-foreground">
            Experience the complete Makhana journey with our variety pack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="px-8">
              View Nutrition
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;