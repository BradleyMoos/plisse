import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Plisse-raamdecoratie</h3>
            <p className="text-gray-400">
              Specialist in horren en raamdecoratie op maat voor uw woning.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>085-0123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@plisse-raamdecoratie.nl</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Producten</h4>
            <ul className="space-y-2">
              <li>Flexibele Horren</li>
              <li>Plissé Gordijnen</li>
              <li>Rolgordijnen</li>
              <li>Screens</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Volg ons</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Plisse-raamdecoratie. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}