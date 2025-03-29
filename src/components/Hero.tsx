import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, MapPin } from 'lucide-react';
const Hero: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1740&auto=format&fit=crop")',
        filter: 'brightness(0.4)'
      }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-16 text-white">
        <div className="max-w-3xl animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Authentischer <span className="text-doner-red">Berliner Döner</span> in Neumünster
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Frische Zutaten, traditionelle Rezepte und ein unvergleichlicher Geschmack – erleben Sie die Qualität von Berlin Döner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-doner-red hover:bg-doner-red/80 text-white text-lg py-6 px-8" onClick={() => document.getElementById('menu')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Speisekarte ansehen
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-white text-lg py-6 px-8 bg-slate-50 text-red-600">
              Besuchen Sie uns
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col md:flex-row gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <Clock className="text-doner-red" size={20} />
              <div>
                <p className="font-medium">Mo-Sa: 11:00 – 22:00 Uhr</p>
                <p className="font-medium">So: 12:00 – 22:00 Uhr</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-doner-red" size={20} />
              <p className="font-medium">Wasbeker Straße 94, 24534 Neumünster</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;