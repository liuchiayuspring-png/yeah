import React from 'react';
import { FadeIn } from './FadeIn';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-square sm:aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/stones_balance/800/1000" 
                    alt="Balanced stones representing stability" 
                    className="w-full h-full object-cover grayscale opacity-90"
                />
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={200} className="flex flex-col justify-center">
            <blockquote className="font-serif text-3xl sm:text-4xl leading-tight text-gray-900 mb-8">
              "I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it."
            </blockquote>
            
            <div className="border-t border-gray-100 pt-8">
                <p className="font-serif font-bold text-gray-900 text-lg">John Smith</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Head of Data</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
