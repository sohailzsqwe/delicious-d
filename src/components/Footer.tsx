
import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-doner-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Berlin Döner</h3>
            <p className="mb-4">
              Authentischer Berliner Döner in Neumünster – traditionell zubereitet mit frischen Zutaten.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-doner-red transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-doner-red transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@berlin-doener-neumuenster.de" className="hover:text-doner-red transition-colors" aria-label="E-Mail">
                <Mail size={24} />
              </a>
              <a href="tel:+4943218770616" className="hover:text-doner-red transition-colors" aria-label="Telefon">
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Montag - Samstag:</span>
                <span>11:00 – 22:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span>12:00 – 22:00 Uhr</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="not-italic space-y-2">
              <p>Wasbeker Straße 94</p>
              <p>24534 Neumünster, Deutschland</p>
              <p>
                <a href="tel:+4943218770616" className="hover:text-doner-red transition-colors">
                  +49 4321 8770616
                </a>
              </p>
              <p>
                <a href="mailto:info@berlin-doener-neumuenster.de" className="hover:text-doner-red transition-colors">
                  info@berlin-doener-neumuenster.de
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-doner-red transition-colors">Startseite</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-doner-red transition-colors">Speisekarte</a>
              </li>
              <li>
                <a href="#about" className="hover:text-doner-red transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-doner-red transition-colors">Kontakt</a>
              </li>
              <li>
                <a href="#" className="hover:text-doner-red transition-colors">Impressum</a>
              </li>
              <li>
                <a href="#" className="hover:text-doner-red transition-colors">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Berlin Döner – Neumünster. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
