export type Language = 'fr' | 'de' | 'it' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    hours: string;
    location: string;
    contact: string;
  };
  hero: {
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  services: {
    title: string;
    facial: { name: string; description: string };
    body: { name: string; description: string };
    manicure: { name: string; description: string };
    pedicure: { name: string; description: string };
    waxing: { name: string; description: string };
    makeup: { name: string; description: string };
  };
  hours: {
    title: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    closed: string;
  };
  location: {
    title: string;
    directions: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
    followUs: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
  disclaimer: {
    title: string;
    line1: string;
    line2: string;
    line3: string;
    dismiss: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'A propos',
      services: 'Services',
      hours: 'Horaires',
      location: 'Localisation',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Votre institut de beaute a Chippis',
      cta: 'Nous contacter',
    },
    about: {
      title: 'A propos',
      content: "Depuis l'obtention de mon diplome d'estheticienne en France, ma passion pour ce metier n'a cesse de grandir. C'est pourquoi il m'est important de vous rendre heureuse et d'acquerir de nouvelles competences tout au long de l'annee. Je suis regulierement des formations pour apprendre les dernieres techniques de soins. Il est essentiel que vous vous sentiez a l'aise des que vous franchissez la porte du salon. Je ferai toujours tout mon possible pour assurer votre entiere satisfaction.",
    },
    services: {
      title: 'Nos Services',
      facial: { name: 'Soins du visage', description: 'Traitements personnalises pour une peau eclatante' },
      body: { name: 'Soins du corps', description: 'Massages relaxants et soins corporels' },
      manicure: { name: 'Manucure', description: 'Soins des mains et pose de vernis' },
      pedicure: { name: 'Pedicure', description: 'Soins des pieds et beaute des ongles' },
      waxing: { name: 'Epilation', description: 'Epilation a la cire pour une peau douce' },
      makeup: { name: 'Maquillage', description: 'Maquillage professionnel pour toutes occasions' },
    },
    hours: {
      title: 'Horaires d\'ouverture',
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      closed: 'Ferme',
    },
    location: {
      title: 'Nous trouver',
      directions: 'Itineraire',
    },
    contact: {
      title: 'Contact',
      phone: 'Telephone',
      email: 'Email',
      address: 'Adresse',
      followUs: 'Suivez-nous',
    },
    footer: {
      rights: 'Tous droits reserves',
      madeWith: 'Site cree avec',
    },
    disclaimer: {
      title: 'Information importante',
      line1: 'Ce site web est un apercu de demonstration.',
      line2: 'Il n\'est pas reference sur Google.',
      line3: 'Il peut contenir des erreurs ou inexactitudes.',
      dismiss: 'J\'ai compris',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Uber uns',
      services: 'Dienstleistungen',
      hours: 'Offnungszeiten',
      location: 'Standort',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Ihr Schonheitsinstitut in Chippis',
      cta: 'Kontaktieren Sie uns',
    },
    about: {
      title: 'Uber uns',
      content: 'Seit dem Erwerb meines Kosmetikerin-Diploms in Frankreich ist meine Leidenschaft fur diesen Beruf stetig gewachsen. Deshalb ist es mir wichtig, Sie glucklich zu machen und das ganze Jahr uber neue Fahigkeiten zu erwerben. Ich besuche regelmasig Schulungen, um die neuesten Behandlungstechniken zu erlernen. Es ist wesentlich, dass Sie sich wohlfuhlen, sobald Sie den Salon betreten. Ich werde immer mein Bestes tun, um Ihre vollstandige Zufriedenheit zu gewahrleisten.',
    },
    services: {
      title: 'Unsere Dienstleistungen',
      facial: { name: 'Gesichtsbehandlungen', description: 'Personalisierte Behandlungen fur strahlende Haut' },
      body: { name: 'Korperbehandlungen', description: 'Entspannende Massagen und Korperpflege' },
      manicure: { name: 'Manikure', description: 'Handpflege und Nagellack' },
      pedicure: { name: 'Pedikure', description: 'Fusspflege und Nagelschonheit' },
      waxing: { name: 'Haarentfernung', description: 'Wachsen fur weiche Haut' },
      makeup: { name: 'Make-up', description: 'Professionelles Make-up fur jeden Anlass' },
    },
    hours: {
      title: 'Offnungszeiten',
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
      closed: 'Geschlossen',
    },
    location: {
      title: 'Uns finden',
      directions: 'Wegbeschreibung',
    },
    contact: {
      title: 'Kontakt',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      followUs: 'Folgen Sie uns',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      madeWith: 'Erstellt mit',
    },
    disclaimer: {
      title: 'Wichtige Information',
      line1: 'Diese Website ist eine Entwurfsvorschau.',
      line2: 'Sie ist nicht bei Google indexiert.',
      line3: 'Sie kann Fehler oder Ungenauigkeiten enthalten.',
      dismiss: 'Verstanden',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi siamo',
      services: 'Servizi',
      hours: 'Orari',
      location: 'Posizione',
      contact: 'Contatto',
    },
    hero: {
      tagline: 'Il vostro istituto di bellezza a Chippis',
      cta: 'Contattaci',
    },
    about: {
      title: 'Chi siamo',
      content: 'Da quando ho ottenuto il mio diploma di estetista in Francia, la mia passione per questa professione e cresciuta costantemente. Ecco perche e importante per me rendervi felici e acquisire nuove competenze durante tutto l\'anno. Frequento regolarmente corsi di formazione per apprendere le ultime tecniche di trattamento. E essenziale che vi sentiate a vostro agio appena varcate la porta del salone. Faro sempre del mio meglio per garantire la vostra completa soddisfazione.',
    },
    services: {
      title: 'I nostri servizi',
      facial: { name: 'Trattamenti viso', description: 'Trattamenti personalizzati per una pelle luminosa' },
      body: { name: 'Trattamenti corpo', description: 'Massaggi rilassanti e cure del corpo' },
      manicure: { name: 'Manicure', description: 'Cura delle mani e applicazione smalto' },
      pedicure: { name: 'Pedicure', description: 'Cura dei piedi e bellezza delle unghie' },
      waxing: { name: 'Depilazione', description: 'Depilazione a cera per una pelle morbida' },
      makeup: { name: 'Trucco', description: 'Trucco professionale per ogni occasione' },
    },
    hours: {
      title: 'Orari di apertura',
      monday: 'Lunedi',
      tuesday: 'Martedi',
      wednesday: 'Mercoledi',
      thursday: 'Giovedi',
      friday: 'Venerdi',
      saturday: 'Sabato',
      sunday: 'Domenica',
      closed: 'Chiuso',
    },
    location: {
      title: 'Trovarci',
      directions: 'Indicazioni',
    },
    contact: {
      title: 'Contatto',
      phone: 'Telefono',
      email: 'Email',
      address: 'Indirizzo',
      followUs: 'Seguici',
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      madeWith: 'Creato con',
    },
    disclaimer: {
      title: 'Informazione importante',
      line1: 'Questo sito web e un\'anteprima bozza.',
      line2: 'Non e indicizzato su Google.',
      line3: 'Potrebbe contenere errori o imprecisioni.',
      dismiss: 'Ho capito',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      hours: 'Hours',
      location: 'Location',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Your beauty institute in Chippis',
      cta: 'Contact us',
    },
    about: {
      title: 'About Us',
      content: 'Since obtaining my beautician\'s diploma in France, my passion for this profession has continued to grow. That\'s why it\'s important for me to make you happy and acquire new skills throughout the year. I regularly attend training courses to learn the latest treatment techniques. It is essential that you feel comfortable as soon as you walk through the door of the salon. I will always do my utmost to ensure your complete satisfaction.',
    },
    services: {
      title: 'Our Services',
      facial: { name: 'Facial Treatments', description: 'Personalized treatments for radiant skin' },
      body: { name: 'Body Treatments', description: 'Relaxing massages and body care' },
      manicure: { name: 'Manicure', description: 'Hand care and nail polish application' },
      pedicure: { name: 'Pedicure', description: 'Foot care and nail beauty' },
      waxing: { name: 'Waxing', description: 'Wax hair removal for smooth skin' },
      makeup: { name: 'Makeup', description: 'Professional makeup for all occasions' },
    },
    hours: {
      title: 'Opening Hours',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
    },
    location: {
      title: 'Find Us',
      directions: 'Get directions',
    },
    contact: {
      title: 'Contact',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      followUs: 'Follow us',
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
    },
    disclaimer: {
      title: 'Important Notice',
      line1: 'This website is a draft preview.',
      line2: 'It is not indexed on Google.',
      line3: 'It may contain errors or inaccuracies.',
      dismiss: 'I understand',
    },
  },
};
