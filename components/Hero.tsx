import React from 'react';
import { FadeIn } from './FadeIn';

const logos = [
  'Acme Corp', 'GlobalBank', 'Nebula', 'Treeline', 'FoxRun'
];

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn delay={0}>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-gray-900 mb-12 tracking-tight">
            Browse everything.
          </h1>
        </FadeIn>
        
        {/* Dashboard Mockup */}
        <FadeIn delay={200} direction="up" className="relative mx-auto max-w-5xl rounded-2xl bg-olive-900 p-2 sm:p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-2xl ring-1 ring-gray-900/10">
                <img 
                    src="https://picsum.photos/seed/dashboard_tech/1200/600" 
                    alt="App Dashboard Interface" 
                    className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <p className="text-sm font-mono uppercase tracking-widest opacity-80 mb-2">Total Growth</p>
                    <p className="text-4xl sm:text-6xl font-serif">78% Efficiency</p>
                </div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-olive-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        </FadeIn>

        {/* Trusted By */}
        <div className="mt-16 sm:mt-24">
            <FadeIn delay={400} className="inline-block w-full">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by:</p>
                <div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-60 grayscale">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                            <div className="h-6 w-6 bg-gray-800 rounded-full"></div>
                            <span className="font-bold text-gray-800 font-serif text-lg">{logo}</span>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};
