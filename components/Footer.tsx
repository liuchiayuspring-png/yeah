import React from 'react';
import { User } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <FadeIn>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
                Connect with us
            </h2>
            <p className="text-gray-500 mb-10">
                Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
            </p>
            <button className="bg-olive-900 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-olive-800 transition-colors w-full sm:w-auto shadow-xl shadow-olive-900/10">
                Learn More <span className="ml-2">↗</span>
            </button>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 font-medium uppercase tracking-widest space-y-8 md:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="#benefits" className="hover:text-gray-900 transition-colors">Benefits</a>
            <a href="#specs" className="hover:text-gray-900 transition-colors">Specifications</a>
            <a href="#howto" className="hover:text-gray-900 transition-colors">How-to</a>
          </div>

          <div className="flex items-center space-x-2">
            <User size={16} className="text-gray-900" />
            <span className="text-gray-400 normal-case tracking-normal">© Area. 2025</span>
          </div>

          <div className="text-right">
             <span className="text-gray-400 normal-case tracking-normal">All Rights Reserved</span>
          </div>
        </FadeIn>
      </div>
      
      {/* Decorative Loader at Bottom Right */}
      <div className="absolute bottom-12 right-12 opacity-50 hidden lg:block pointer-events-none transform scale-75">
          <div className="loader"></div>
      </div>
    </footer>
  );
};