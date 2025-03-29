
import React from 'react';
import Layout from '@/components/Layout';
import ReviewSection from '@/components/ReviewSection';

const Reviews: React.FC = () => {
  return (
    <Layout>
      <div className="container-custom py-16 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Kunden<span className="text-doner-red">bewertungen</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Sehen Sie, was unsere Kunden über uns sagen. Wir sind stolz auf unseren Service
          und die Qualität unserer Speisen.
        </p>
        
        <ReviewSection />
      </div>
    </Layout>
  );
};

export default Reviews;
