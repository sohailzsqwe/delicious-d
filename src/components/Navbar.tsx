
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Speisekarte', href: '/menu' },
    { name: 'Über uns', href: '/about' },
    { name: 'Bewertungen', href: '/reviews' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-doner-red">
            Berlin Döner
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href) ? 'text-doner-red' : 'hover:text-doner-red'
                  }`}
                >
                  {link.name}
                </Link>
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
                  <Link 
                    to={link.href}
                    className={`block py-2 text-lg font-medium transition-colors ${
                      isActive(link.href) ? 'text-doner-red' : 'hover:text-doner-red'
                    }`}
                  >
                    {link.name}
                  </Link>
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
