
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ReviewSection from '@/components/ReviewSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
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

  return (
    <Layout>
      <Hero />
      <MenuSection />
      <AboutSection />
      <ReviewSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
