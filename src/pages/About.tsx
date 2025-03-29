
import React from 'react';
import Layout from '@/components/Layout';
import AboutSection from '@/components/AboutSection';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom py-16 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Über <span className="text-doner-red">Berlin Döner</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Lernen Sie uns kennen und erfahren Sie mehr über unsere Geschichte, 
          unsere Werte und unsere Leidenschaft für authentische Berliner Döner.
        </p>
        
        <AboutSection />
      </div>
    </Layout>
  );
};

export default About;
