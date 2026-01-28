import { useLanguage } from '../i18n/LanguageContext';
import { Sparkles, Flower2, Hand, Footprints, Scissors, Palette } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
}

function ServiceCard({ icon: Icon, name, description }: ServiceCardProps) {
  return (
    <div className="group bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        {name}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Sparkles, ...t.services.facial },
    { icon: Flower2, ...t.services.body },
    { icon: Hand, ...t.services.manicure },
    { icon: Footprints, ...t.services.pedicure },
    { icon: Scissors, ...t.services.waxing },
    { icon: Palette, ...t.services.makeup },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.services.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
