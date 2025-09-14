import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import OurStory from "@/components/OurStory";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,70,159,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,70,159,0.2)_0%,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground text-sm font-medium">
              <div className="w-2 h-2 bg-background rounded-full animate-pulse-soft" />
              <span>About Zeno</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Bringing Ancient
              <span className="block text-background/90">
                Wisdom to Modern
              </span>
              Snacking
            </h1>
            
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              From India to Europe, discover the story behind Zeno's mission to revolutionize 
              healthy snacking with traditional makhana.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Richa's Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="gradient-card border-0 shadow-strong overflow-hidden">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Meet Richa
                        <span className="block text-primary">
                          Founder & CEO
                        </span>
                      </h2>
                      
                      <p className="text-lg text-muted-foreground">
                        An Indian mother, successful corporate leader, and passionate advocate for healthy living.
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With 20 years of experience in the global food industry, Richa has witnessed firsthand 
                        the gap between healthy eating and convenient snacking. Living in Copenhagen and raising 
                        her children, she was driven by a mother's instinct to provide wholesome nutrition.
                      </p>
                      
                      <p>
                        Her journey began in her sunlit Copenhagen kitchen, where the aroma of roasted fox nuts 
                        transported her back to her mother's home in India. This moment sparked the vision for Zeno.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                        👩‍💼
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">20+ Years</h3>
                      <p className="text-muted-foreground">Food Industry Experience</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground">
                Our Mission & Values
              </h2>
              <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
                We believe that healthy snacking shouldn't mean compromising on taste or convenience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Natural & Pure</h3>
                  <p className="text-muted-foreground text-sm">
                    No artificial preservatives, colors, or flavors. Just pure, natural ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Global Heritage</h3>
                  <p className="text-muted-foreground text-sm">
                    Bringing ancient Indian superfood wisdom to the modern world.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="text-xl font-semibold text-card-foreground">Family First</h3>
                  <p className="text-muted-foreground text-sm">
                    Created by a mother, for families who care about health and taste.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Ready to Experience Zeno?
            </h2>
            <p className="text-muted-foreground">
              Join us on our mission to make healthy snacking delicious and accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/lovable-uploads/1253bd5d-37ed-47d2-9377-3343db34fef0.png" 
                alt="Zeno Logo" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Zeno. All rights reserved. Made with ❤️ in Copenhagen.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;