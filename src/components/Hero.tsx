import { useLanguage } from '../i18n/LanguageContext';
import { Button } from './ui/button';
import logo from '../assets/logo.png';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={logo}
            alt="Lola Institut"
            className="w-48 md:w-64 lg:w-80 h-auto drop-shadow-lg"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t.hero.tagline}
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 md:w-24 bg-primary/50" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="h-px w-16 md:w-24 bg-primary/50" />
        </div>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
        >
          <a href="#contact">{t.hero.cta}</a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
