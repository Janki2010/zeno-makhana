import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import cheddarCheeseImage from "@/assets/cheddar-cheese.png";
import creamOnionImage from "@/assets/cream-onion.png";
import saltPepperImage from "@/assets/salt-pepper.png";
import sweetChilliImage from "@/assets/sweet-chilli.png";
import piriPiriImage from "@/assets/piri-piri.png";

const Webshop = () => {
  const products = [
    {
      name: "Cheddar Cheese Makhana",
      description: "Rich and savory cheddar cheese flavor that's irresistibly cheesy",
      price: "20 kr.",
      popular: true,
      image: cheddarCheeseImage,
    },
    {
      name: "Cream & Onion Makhana",
      description: "Classic creamy onion flavor with a perfect balance of herbs",
      price: "20 kr.",
      popular: false,
      image: creamOnionImage,
    },
    {
      name: "Himalayan Salt & Pepper Makhana",
      description: "Simple yet flavorful combination of sea salt and cracked pepper",
      price: "20 kr.",
      popular: false,
      image: saltPepperImage,
    },
    {
      name: "Sweet Chilli Makhana",
      description: "Perfect blend of sweet and spicy with a tantalizing chilli kick",
      price: "20 kr.",
      popular: false,
      image: sweetChilliImage,
    },
    {
      name: "Piri Piri Makhana",
      description: "Fiery and bold Portuguese-inspired piri piri spice blend",
      price: "20 kr.",
      popular: false,
      image: piriPiriImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 text-accent-foreground text-sm font-medium">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Webshop</span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
                Shop Our
                <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Premium Makhana
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our collection of healthy and delicious makhana snacks, 
                perfect for any time of the day.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={product.name} 
                  className="relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 bg-background"
                >
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                      POPULAR
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <div className="aspect-square p-4">
                    <img 
                      src={product.image} 
                      alt={`${product.name} product package`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">
                          {product.price}
                        </div>
                        <Button variant="default" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Webshop;