
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Besuchen Sie uns</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir freuen uns darauf, Sie in unserem Restaurant begrüßen zu dürfen. Bestellen Sie direkt vor Ort, rufen Sie an oder nutzen Sie unser Kontaktformular.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.7123501523785!2d9.9784696!3d54.0748089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2584808f5ff49%3A0x33cec0de85ca8bd9!2sWasbeker%20Str.%2094%2C%2024534%20Neum%C3%BCnster!5e0!3m2!1sde!2sde!4v1720712118985!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort von Berlin Döner"
              ></iframe>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-doner-red mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Adresse</h4>
                    <p className="text-gray-700">Wasbeker Straße 94, 24534 Neumünster, Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-doner-red mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Telefon</h4>
                    <p className="text-gray-700">
                      <a href="tel:+4943218770616" className="hover:text-doner-red transition-colors">
                        +49 4321 8770616
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-doner-red mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Öffnungszeiten</h4>
                    <p className="text-gray-700">Montag bis Samstag: 11:00 – 22:00 Uhr</p>
                    <p className="text-gray-700">Sonntag: 12:00 – 22:00 Uhr</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border rounded-md focus:ring-doner-red focus:border-doner-red" 
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border rounded-md focus:ring-doner-red focus:border-doner-red" 
                        placeholder="Ihre E-Mail"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border rounded-md focus:ring-doner-red focus:border-doner-red" 
                      placeholder="Ihre Nachricht"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-doner-red hover:bg-doner-red/80 text-white">
                    Nachricht senden
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
