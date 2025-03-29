
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Speisekarte', href: '#menu' },
    { name: 'Über uns', href: '#about' },
    { name: 'Bewertungen', href: '#reviews' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-2xl md:text-3xl font-bold text-doner-red">
            Berlin Döner
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="font-medium hover:text-doner-red transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-doner-red hover:bg-doner-red/80 text-white flex items-center gap-2"
            onClick={() => window.location.href = 'tel:+4943218770616'}
          >
            <Phone size={16} />
            <span className="hidden lg:inline">+49 4321 8770616</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            className="text-doner-dark hover:bg-transparent"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="container-custom py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="block py-2 text-lg font-medium hover:text-doner-red transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  className="w-full bg-doner-red hover:bg-doner-red/80 text-white flex items-center justify-center gap-2 mt-4"
                  onClick={() => window.location.href = 'tel:+4943218770616'}
                >
                  <Phone size={16} />
                  +49 4321 8770616
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
