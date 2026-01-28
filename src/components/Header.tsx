import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';
import logo from '../assets/logo.png';

const languages: { code: Language; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#hours', label: t.nav.hours },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Lola Institut" className="h-12 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {language.toUpperCase()}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-card border border-border rounded-md shadow-lg py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        language === lang.code ? 'text-primary font-semibold' : 'text-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
