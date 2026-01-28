import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { DisclaimerModal } from './components/DisclaimerModal';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OpeningHours } from './components/OpeningHours';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <DisclaimerModal />
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <OpeningHours />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
