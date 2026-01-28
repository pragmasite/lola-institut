import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from './ui/button';

export function Location() {
  const { t } = useLanguage();

  const address = 'Rue de la Place 4, 3965 Chippis, CH';
  const coordinates = { lat: 46.279334, lng: 7.5422 };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.01}%2C${coordinates.lat - 0.005}%2C${coordinates.lng + 0.01}%2C${coordinates.lat + 0.005}&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`;

  return (
    <section id="location" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.location.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
            {/* Map */}
            <div className="relative h-64 md:h-80 w-full">
              <iframe
                title="Lola Institut Location"
                src={osmEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Address info */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Lola Institut</p>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    {t.location.directions}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
