
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Utensils, Star, Clock, MapPin } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animation on scroll
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('opacity-100');
        }
      });
    };
    
    // Run once on initial load
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);

  const featureCards = [
    {
      title: "Frische Zutaten",
      description: "Wir verwenden nur frische, hochwertige Zutaten für unsere Gerichte",
      icon: Utensils,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Ausgezeichneter Service",
      description: "Unser freundliches Team sorgt dafür, dass Sie sich wohlfühlen",
      icon: Star,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Lange Öffnungszeiten",
      description: "Mo-Sa: 11:00 – 22:00 Uhr, So: 12:00 – 22:00 Uhr",
      icon: Clock,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Zentrale Lage",
      description: "Wasbeker Straße 94, 24534 Neumünster",
      icon: MapPin,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Feature Cards */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center mb-4`}>
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere <span className="text-doner-red">Speisekarte</span></h2>
              <p className="text-lg text-gray-700 mb-6">
                Entdecken Sie unsere vielfältige Auswahl an Döner-Spezialitäten, Dürüm, 
                Falafel und anderen köstlichen Gerichten. Alle Speisen werden frisch zubereitet.
              </p>
              <Button 
                onClick={() => navigate('/menu')}
                className="bg-doner-red hover:bg-doner-red/90 text-white"
              >
                Vollständige Speisekarte <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4 animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg h-40">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1740&auto=format&fit=crop" 
                  alt="Döner Kebab" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-40">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1480&auto=format&fit=crop" 
                  alt="Frische Zutaten" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-doner-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Besuchen Sie uns heute!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto animate-on-scroll">
            Erleben Sie authentischen Berliner Döner in Neumünster. Unser freundliches Team 
            freut sich auf Ihren Besuch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Kontakt & Anfahrt
            </Button>
            <Button 
              className="bg-white text-doner-red hover:bg-white/90"
              onClick={() => window.location.href = 'tel:+4943218770616'}
            >
              <Phone size={16} className="mr-2" />
              +49 4321 8770616
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
