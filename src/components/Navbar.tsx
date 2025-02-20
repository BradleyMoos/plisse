import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the navbar (16 * 4 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-primary text-2xl font-bold">
              Plisse-raamdecoratie
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('toepassingen')} 
              className="text-gray-700 hover:text-primary"
            >
              Toepassingen
            </button>
            <button 
              onClick={() => scrollToSection('oplossingen')} 
              className="text-gray-700 hover:text-primary"
            >
              Oplossingen
            </button>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('toepassingen')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Toepassingen
            </button>
            <button 
              onClick={() => scrollToSection('oplossingen')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
            >
              Oplossingen
            </button>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}