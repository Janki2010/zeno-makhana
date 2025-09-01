import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,70,159,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,70,159,0.1)_0%,transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-0 shadow-strong overflow-hidden">
            <CardContent className="p-12 text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                  <span>Get In Touch</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  Ready to Try
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Makhana?
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience the perfect balance of health and taste with our premium flavored Makhana collection.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  variant="minimal" 
                  size="lg"
                  className="text-lg px-10 py-6 h-auto"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;