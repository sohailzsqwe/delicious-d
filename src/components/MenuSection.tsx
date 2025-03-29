
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QRCodeGenerator from './QRCodeGenerator';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
}

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('doner');

  const menuCategories = [
    { id: 'doner', name: 'Döner' },
    { id: 'durum', name: 'Dürüm' },
    { id: 'plates', name: 'Teller' },
    { id: 'sides', name: 'Beilagen' },
    { id: 'beverages', name: 'Getränke' },
  ];

  const menuItems: Record<string, MenuItem[]> = {
    doner: [
      {
        id: 1,
        name: 'Klassischer Döner',
        description: 'Frisches Fladenbrot mit Hähnchen- oder Kalbfleisch, knackigem Salat, Tomaten, Zwiebeln und Sauce nach Wahl',
        price: '6,50 €',
        image: 'https://images.unsplash.com/photo-1599301838130-55e4c878fe21?q=80&w=1933&auto=format&fit=crop',
      },
      {
        id: 2,
        name: 'Veggie Döner',
        description: 'Frisches Fladenbrot mit Falafel, knackigem Salat, Tomaten, Zwiebeln und Sauce nach Wahl',
        price: '6,00 €',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1887&auto=format&fit=crop',
      },
      {
        id: 3,
        name: 'Döner-Box',
        description: 'Döner-Fleisch mit Pommes, frischem Salat und Sauce in einer praktischen Box',
        price: '7,00 €',
      },
    ],
    durum: [
      {
        id: 4,
        name: 'Klassischer Dürüm',
        description: 'Hauchdünne Yufka-Rolle gefüllt mit saftigem Döner-Fleisch, frischem Salat und Sauce nach Wahl',
        price: '7,50 €',
        image: 'https://images.unsplash.com/photo-1661183257336-3afd4c05489a?q=80&w=1932&auto=format&fit=crop',
      },
      {
        id: 5,
        name: 'Dürüm Spezial',
        description: 'Unsere Spezialvariante mit extra Fleisch, Käse und allen Zutaten',
        price: '8,50 €',
      },
    ],
    plates: [
      {
        id: 6,
        name: 'Döner Teller',
        description: 'Reichlich Döner-Fleisch mit Reis oder Pommes, frischem Salat und Sauce nach Wahl',
        price: '10,50 €',
        image: 'https://images.unsplash.com/photo-1525518392674-39ba1febe311?q=80&w=1740&auto=format&fit=crop',
      },
      {
        id: 7,
        name: 'Mixed Grill Teller',
        description: 'Verschiedene gegrillte Fleischsorten mit Beilagen und frischem Salat',
        price: '13,50 €',
      },
    ],
    sides: [
      {
        id: 8,
        name: 'Pommes Frites',
        description: 'Knusprige goldene Pommes Frites mit Ketchup oder Mayonnaise',
        price: '3,50 €',
      },
      {
        id: 9,
        name: 'Falafel (6 Stück)',
        description: 'Knusprige Kichererbsen-Bällchen nach traditionellem Rezept',
        price: '4,50 €',
        image: 'https://images.unsplash.com/photo-1593001872095-7d5b3868dd5b?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    beverages: [
      {
        id: 10,
        name: 'Softgetränke',
        description: 'Cola, Fanta, Sprite, etc. (0,33l)',
        price: '2,50 €',
      },
      {
        id: 11,
        name: 'Ayran',
        description: 'Traditionelles türkisches Joghurtgetränk',
        price: '2,00 €',
      },
    ],
  };

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Speisekarte</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere köstlichen Gerichte, zubereitet mit frischen Zutaten nach traditionellen Rezepten aus Berlin.
          </p>
        </div>

        <Tabs defaultValue="doner" className="w-full animate-on-scroll">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="px-6 py-3 text-base font-medium data-[state=active]:bg-doner-red data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {menuItems[category.id].map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
                  >
                    {item.image && (
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-6 flex flex-col justify-between ${item.image ? 'md:w-2/3' : 'w-full'}`}>
                      <div>
                        <h3 className="text-xl font-bold mb-2 flex justify-between">
                          <span>{item.name}</span>
                          <span className="text-doner-red">{item.price}</span>
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-lg mb-6">Scannen Sie den QR-Code, um unsere digitale Speisekarte auf Ihrem Smartphone zu öffnen</p>
          <div className="inline-block">
            <QRCodeGenerator url={window.location.href + '#menu'} />
          </div>
          <div className="mt-8">
            <Button 
              className="bg-doner-red hover:bg-doner-red/80 text-white text-lg py-6 px-8"
              onClick={() => window.location.href = 'tel:+4943218770616'}
            >
              Jetzt bestellen: +49 4321 8770616
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
