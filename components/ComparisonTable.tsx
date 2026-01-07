import React from 'react';
import { Check, X } from 'lucide-react';
import { ComparisonRow } from '../types';
import { FadeIn } from './FadeIn';

const features: ComparisonRow[] = [
  { feature: 'Ultra-fast browsing', area: true, webSurge: true, hyperView: 'Moderate speeds' },
  { feature: 'Advanced AI insights', area: true, webSurge: 'Basic AI recommendations', hyperView: false },
  { feature: 'Seamless integration', area: true, webSurge: 'Restricts customization', hyperView: 'Steep learning curve' },
  { feature: 'Advanced AI insights', area: true, webSurge: 'Basic AI insights', hyperView: false },
  { feature: 'Ultra-fast browsing', area: true, webSurge: 'Fast browsing', hyperView: 'Moderate speeds' },
  { feature: 'Full UTF-8 support', area: true, webSurge: 'Potential display errors', hyperView: 'Partial UTF-8 support' },
];

export const ComparisonTable: React.FC = () => {
  return (
    <section id="specs" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Specs</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">Why Choose Area?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
                You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.
            </p>
            <div className="mt-8">
                <button className="bg-olive-100 text-olive-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-olive-200 transition-colors">
                    Discover More
                </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200} className="overflow-hidden border border-gray-100 rounded-3xl">
          <div className="grid grid-cols-4 bg-gray-50 p-6 border-b border-gray-100">
             <div className="col-span-1"></div>
             <div className="col-span-1 text-center font-serif font-bold text-xl">Area</div>
             <div className="col-span-1 text-center font-medium text-gray-500 text-sm">WebSurge</div>
             <div className="col-span-1 text-center font-medium text-gray-500 text-sm">HyperView</div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {features.map((row, idx) => (
              <div key={idx} className="grid grid-cols-4 p-6 hover:bg-gray-50/50 transition-colors items-center">
                <div className="col-span-1 text-xs font-medium text-gray-900 uppercase tracking-wider">{row.feature}</div>
                
                {/* Area Column */}
                <div className="col-span-1 flex justify-center">
                    {row.area === true ? <Check className="text-olive-900 w-5 h-5" /> : <span className="text-xs text-gray-500 text-center">{row.area}</span>}
                </div>

                {/* WebSurge Column */}
                <div className="col-span-1 flex justify-center">
                    {row.webSurge === true ? <Check className="text-gray-400 w-5 h-5" /> : 
                     row.webSurge === false ? <X className="text-gray-300 w-5 h-5" /> :
                     <span className="text-[10px] sm:text-xs text-gray-500 text-center">{row.webSurge}</span>}
                </div>

                {/* HyperView Column */}
                <div className="col-span-1 flex justify-center">
                     {row.hyperView === true ? <Check className="text-gray-400 w-5 h-5" /> : 
                     row.hyperView === false ? <X className="text-gray-300 w-5 h-5" /> :
                     <span className="text-[10px] sm:text-xs text-gray-500 text-center">{row.hyperView}</span>}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
