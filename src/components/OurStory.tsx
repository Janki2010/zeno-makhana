import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const OurStory = () => {
  const { t } = useLanguage();

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
                  <span>{t('story.badge')}</span>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                  {t('story.title_1')}
                  <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {t('story.title_2')}
                  </span>
                  {t('story.title_3')}
                </h2>
              </div>

              {/* Richa's Story */}
              <div className="space-y-6 text-left max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <span className="text-2xl text-primary font-serif">"</span>{t('story.quote_1')}
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {t('story.description_1')}
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {t('story.description_2')}
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {t('story.description_3')}
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t('story.description_4')}<span className="text-2xl text-primary font-serif">"</span>
                  </p>
                  
                  <div className="mt-6 text-right">
                    <p className="text-sm font-medium text-foreground">{t('story.founder')}</p>
                    <p className="text-xs text-muted-foreground">{t('story.location')}</p>
                  </div>
                </div>
              </div>

              {/* Story Details */}
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="space-y-2">
                  <div className="text-2xl">🪷</div>
                  <h3 className="font-semibold text-foreground">{t('story.traditional_title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('story.traditional_desc')}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🔬</div>
                  <h3 className="font-semibold text-foreground">{t('story.modern_title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('story.modern_desc')}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">👨‍🍳</div>
                  <h3 className="font-semibold text-foreground">{t('story.artisan_title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('story.artisan_desc')}</p>
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