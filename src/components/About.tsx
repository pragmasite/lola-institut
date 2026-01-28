import { useLanguage } from '../i18n/LanguageContext';
import { Heart, Award, Sparkles } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const features = [
    { icon: Heart, color: 'text-primary' },
    { icon: Award, color: 'text-accent' },
    { icon: Sparkles, color: 'text-primary' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.about.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/50 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              {/* Feature icons */}
              <div className="flex justify-center gap-8 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center"
                  >
                    <feature.icon className={`w-6 h-6 md:w-8 md:h-8 ${feature.color}`} />
                  </div>
                ))}
              </div>

              {/* About text */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                {t.about.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
