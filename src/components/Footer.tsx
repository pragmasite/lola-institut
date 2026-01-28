import { useLanguage } from '../i18n/LanguageContext';
import { Facebook, Instagram, Heart } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#hours', label: t.nav.hours },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/search/top?q=lola%20institut',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/lolainstitut?hl=fr',
    },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Lola Institut" className="h-16 w-auto mx-auto md:mx-0 mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm">
              Institut de beaute
              <br />
              Chippis, Suisse
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Navigation
            </h4>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.contact.followUs}
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-background/70 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>
              {currentYear} Lola Institut. {t.footer.rights}.
            </p>
            <p className="flex items-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
