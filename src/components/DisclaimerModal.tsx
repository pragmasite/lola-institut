import { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from './ui/button';

const STORAGE_KEY = 'lola-institut-disclaimer-dismissed';

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-card rounded-lg shadow-xl p-6 md:p-8">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.disclaimer.title}
        </h2>

        {/* Content */}
        <div className="space-y-3 text-center text-muted-foreground mb-6">
          <p>{t.disclaimer.line1}</p>
          <p>{t.disclaimer.line2}</p>
          <p>{t.disclaimer.line3}</p>
        </div>

        {/* Dismiss button */}
        <Button
          onClick={handleDismiss}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {t.disclaimer.dismiss}
        </Button>
      </div>
    </div>
  );
}
