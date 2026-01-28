import { useLanguage } from '../i18n/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group"
    >
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
      </div>
    </a>
  );
}

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+41 75 427 68 72',
      href: 'tel:+41754276872',
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'laurellamartin@gmail.com',
      href: 'mailto:laurellamartin@gmail.com',
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: 'Rue de la Place 4, 3965 Chippis',
      href: 'https://www.google.com/maps/search/?api=1&query=Rue+de+la+Place+4+3965+Chippis',
    },
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
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.contact.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <ContactItem
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
                href={item.href}
              />
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t.contact.followUs}</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
