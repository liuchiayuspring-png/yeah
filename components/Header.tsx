import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-gray-900">
              Area
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/brand-design" 
              className={`text-sm font-medium transition-colors ${isActive('/brand-design') ? 'text-olive-900' : 'text-gray-600 hover:text-olive-900'}`}
            >
              Brand Design
            </Link>
            <Link 
              to="/web-design" 
              className={`text-sm font-medium transition-colors ${isActive('/web-design') ? 'text-olive-900' : 'text-gray-600 hover:text-olive-900'}`}
            >
              Web Design
            </Link>
            
            <button className="bg-olive-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-olive-800 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/brand-design"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Brand Design
            </Link>
            <Link
              to="/web-design"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Web Design
            </Link>
            <div className="pt-4">
              <button className="w-full bg-olive-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-olive-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};