
import React from 'react';
import Layout from '@/components/Layout';
import MenuSection from '@/components/MenuSection';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="container-custom py-16 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Unsere <span className="text-doner-red">Speisekarte</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Entdecken Sie unsere authentischen Berliner Döner und andere köstliche Spezialitäten. 
          Alle Gerichte werden frisch mit hochwertigen Zutaten zubereitet.
        </p>
        
        <div className="flex justify-center mb-8">
          <Button 
            variant="outline"
            className="border-doner-red text-doner-red hover:bg-doner-red/10"
            onClick={() => navigate('/qr-code')}
          >
            QR-Code für digitale Speisekarte
          </Button>
        </div>
        
        <MenuSection />
      </div>
    </Layout>
  );
};

export default Menu;
