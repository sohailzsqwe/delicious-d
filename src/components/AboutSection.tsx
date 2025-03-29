
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Über Berlin Döner</h2>
            <p className="text-lg text-gray-700 mb-6">
              Berlin Döner in Neumünster steht für authentischen Berliner Döner Kebab in seiner besten Form. 
              Unser Ziel ist es, die wahre Essenz des beliebten Street Foods zu bewahren und gleichzeitig höchste Qualität zu bieten.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Was uns besonders macht, ist die Kombination aus traditionellen Rezepten, handverlesenen Zutaten und liebevoller Zubereitung. 
              Unser Fleisch wird täglich frisch am Spieß zubereitet, die Saucen nach Hausrezept hergestellt und das Brot von lokalen Bäckereien bezogen.
            </p>
            <p className="text-lg text-gray-700">
              Bei Berlin Döner erleben Sie nicht nur einen Döner – Sie erleben ein Stück Berlin mitten in Neumünster. 
              Unser freundliches Team freut sich darauf, Sie mit kulinarischen Köstlichkeiten zu verwöhnen.
            </p>
          </div>
          
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-container aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1480&auto=format&fit=crop" 
                  alt="Frische Zutaten"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="img-container aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1538128844159-f08f41bfb169?q=80&w=1974&auto=format&fit=crop" 
                  alt="Döner Zubereitung"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="img-container aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1740&auto=format&fit=crop" 
                  alt="Leckeres Essen"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="img-container aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1974&auto=format&fit=crop" 
                  alt="Restaurant Atmosphäre"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
