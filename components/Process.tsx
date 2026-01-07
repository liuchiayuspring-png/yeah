import React from 'react';
import { FadeIn } from './FadeIn';

const steps = [
  {
    number: '01',
    title: 'Get Started',
    description: 'With our intuitive setup, you\'re up and running in minutes.'
  },
  {
    number: '02',
    title: 'Customize and Configure',
    description: 'Adapt Area to your specific requirements and preferences.'
  },
  {
    number: '03',
    title: 'Grow Your Business',
    description: 'Make informed decisions to exceed your goals.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="howto" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <FadeIn className="w-full md:w-auto">
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-2">Map Your Success</h2>
          </FadeIn>
          <FadeIn delay={200} className="mt-6 md:mt-0">
             <button className="bg-olive-100 text-olive-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-olive-200 transition-colors">
                Discover More
              </button>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 150} className="pt-4">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-olive-100 text-olive-900 shadow-sm transition-transform duration-500 hover:scale-110">
                 <span className="text-2xl font-bold font-serif">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500} direction="up" className="relative w-full h-64 sm:h-96 lg:h-[600px] overflow-hidden rounded-3xl bg-olive-900">
             <img 
                src="https://picsum.photos/seed/topographic_map/1600/900" 
                alt="Topographic map visualization" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
            {/* Visual overlay for map effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-olive-900/40 to-transparent"></div>
        </FadeIn>
      </div>
    </section>
  );
};