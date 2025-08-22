import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

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
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              We'd Love to
              <span className="block text-background/90">
                Hear From You
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions about our products? Want to partner with us? 
              Or just want to share your Zeno experience? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="gradient-card border-0 shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..." 
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Get in touch with us
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We're always excited to connect with our community and hear your feedback.
                  </p>
                </div>

                <div className="space-y-6">
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-accent-foreground/80">
                Quick answers to common questions about Zeno products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-3">Where can I buy Zeno products?</h3>
                  <p className="text-muted-foreground text-sm">
                    Currently available online and in select stores across Europe. 
                    Check our store locator or contact us for availability in your area.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-3">Are Zeno products suitable for vegans?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! All our makhana products are 100% vegan, gluten-free, and made with natural ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-3">What is the shelf life of your products?</h3>
                  <p className="text-muted-foreground text-sm">
                    Our products have a shelf life of 12 months when stored in a cool, dry place. 
                    Always check the expiry date on the package.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-3">Do you ship internationally?</h3>
                  <p className="text-muted-foreground text-sm">
                    We currently ship within Europe. International shipping to other regions 
                    is coming soon! Contact us to be notified when available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Discover Our Products
            </h2>
            <p className="text-muted-foreground">
              Ready to try Zeno's delicious and healthy makhana snacks?
            </p>
            <Link to="/">
              <Button size="lg">
                Explore Zeno Products
              </Button>
            </Link>
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

export default ContactUs;