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

      {/* Find Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Find Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Get in touch with us or visit our locations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Headquarters</h3>
                      <p className="text-muted-foreground text-sm">
                        Copenhagen, Denmark<br />
                        European Operations Center
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        hello@zeno.com<br />
                        support@zeno.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">⏰</div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                        Weekend: 10:00 AM - 4:00 PM CET
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Partnerships</h3>
                      <p className="text-muted-foreground text-sm">
                        Interested in carrying Zeno products?<br />
                        Contact: partnerships@zeno.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">Zeno</span>
              </div>
              <p className="text-background/70 text-sm">
                Bringing ancient wisdom to modern snacking with premium makhana from India to Europe.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.69-2.436-2.878-2.436-4.640 0-3.78 2.750-7.252 7.929-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Products</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>Cheddar Cheese Makhana</div>
                <div>Cream & Onion Makhana</div>
                <div>Salt & Pepper Makhana</div>
                <div>Sweet Chilli Makhana</div>
                <div>Piri Piri Makhana</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-background/70">
                <div>info@zeno.com</div>
                <div>+45 12345678</div>
                <div>Copenhagen, Denmark</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2024 Zeno. All rights reserved. Made with ❤️ in Copenhagen.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;