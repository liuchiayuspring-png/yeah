import React from 'react';
import { Zap, Globe, MessageCircle, TrendingUp } from 'lucide-react';
import { BenefitItem } from '../types';
import { FadeIn } from './FadeIn';

const benefits: BenefitItem[] = [
  {
    icon: Zap,
    title: 'Amplify Insights',
    description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
  },
  {
    icon: Globe,
    title: 'Control Your Global Presence',
    description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
  },
  {
    icon: MessageCircle,
    title: 'Remove Language Barriers',
    description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
  },
  {
    icon: TrendingUp,
    title: 'Visualize Growth',
    description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Benefits</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
                We've cracked the code.
            </h2>
            <p className="text-gray-500 text-lg">
                Area provides real insights, without the data overload.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 100} className="flex flex-col items-start space-y-4">
              <div className="p-0">
                <benefit.icon className="w-5 h-5 text-gray-900" strokeWidth={2} />
              </div>
              <h3 className="font-serif text-lg font-medium text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* Large Scenic Image */}
      <div className="mt-24 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <FadeIn delay={300} direction="up" className="w-full">
            <div className="relative w-full h-64 sm:h-96 lg:h-[500px] overflow-hidden rounded-none sm:rounded-3xl">
                <img 
                    src="https://picsum.photos/seed/mountain_landscape/1600/900" 
                    alt="Scenic Landscape showing global reach" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay representing data points */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};
