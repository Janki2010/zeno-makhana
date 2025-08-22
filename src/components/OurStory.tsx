import { Card, CardContent } from "@/components/ui/card";

const OurStory = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
                  <span>Our Story</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  From Copenhagen
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    to India
                  </span>
                  A Mother's Promise
                </h2>
              </div>

              {/* Richa's Story */}
              <div className="space-y-6 text-left max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <span className="text-2xl text-primary font-serif">"</span>The aroma of roasted fox nuts filled the small, sunlit kitchen in Copenhagen, a scent that transported me twenty years back to my mother's home in India.
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    I am Richa, an Indian mother and a successful corporate leader. At 40, with two decades of experience navigating the complex world of the global food industry, I am a force to be reckoned with. But whenever I visit superstores, I was missing out the healthy snack options and the racks were full of unhealthy snack options. I was driven by a deep desire to offer something healthy and wholesome to children and the world.
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    I had spent my career developing products for multinational corporations, but something was always missing. The products were often filled with preservatives and artificial flavors, a stark contrast to the pure, simple food I grew up with. This realization hit me hard when I saw my own child reaching for packaged snacks instead of the nutritious snacks she packed. That's when the idea for "Zeno" was born.
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    I knew the power of makhana, or fox nuts—a superfood from India, packed with nutrients and naturally light. But I also knew that to make it a global success, I had to make it exciting. For months, my kitchen became my lab. I experimented with flavors inspired by my travels: cheddar cheese from a business trip to France, sweet chili from a family holiday in Mexico, and a cream and onion flavor from eastern Europe, and finally the Himalayan salt and pepper blend that reminds me of my origin.
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    This journey wasn't just about launching a brand; it was about connecting my roots to my modern life. I saw a gap in the market for snacks that were both healthy and flavorful, and I was the perfect person to fill it. My 20 years of experience gave me the business acumen, and my maternal instincts gave me the passion. I am not just selling a product; I am sharing a piece of my heritage, a mother's promise of good health and great taste, one delicious makhana at a time.<span className="text-2xl text-primary font-serif">"</span>
                  </p>
                  
                  <div className="mt-6 text-right">
                    <p className="text-sm font-medium text-foreground">— Richa, Founder & CEO</p>
                    <p className="text-xs text-muted-foreground">Copenhagen, Denmark</p>
                  </div>
                </div>
              </div>

              {/* Story Details */}
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="space-y-2">
                  <div className="text-2xl">🪷</div>
                  <h3 className="font-semibold text-foreground">Traditional Harvesting</h3>
                  <p className="text-sm text-muted-foreground">Hand-picked lotus seeds from pristine waters using centuries-old techniques</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🔬</div>
                  <h3 className="font-semibold text-foreground">Modern Processing</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art roasting and flavoring technology for perfect taste and texture</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">👨‍🍳</div>
                  <h3 className="font-semibold text-foreground">Artisan Flavoring</h3>
                  <p className="text-sm text-muted-foreground">Master chefs craft each flavor blend using premium natural ingredients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurStory;