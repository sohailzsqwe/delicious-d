
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom py-16 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          <span className="text-doner-red">Kontakt</span> & Anfahrt
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Sie haben Fragen oder Anmerkungen? Kontaktieren Sie uns oder kommen Sie vorbei!
          Wir freuen uns auf Ihren Besuch.
        </p>
        
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
