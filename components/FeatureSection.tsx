import React from 'react';
import { FeatureStep } from '../types';
import { FadeIn } from './FadeIn';

const steps: FeatureStep[] = [
  {
    number: '01',
    title: 'Spot Trends in Seconds',
    description: 'No more digging through numbers.',
  },
  {
    number: '02',
    title: 'Get Everyone on the Same Page',
    description: 'Share easy-to-understand reports with your team.',
  },
  {
    number: '03',
    title: 'Make Presentations Pop',
    description: 'Interactive maps and dashboards keep your audience engaged.',
  },
  {
    number: '04',
    title: 'Your Global Snapshot',
    description: 'Get a quick, clear overview of your entire operation.',
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
                <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
                See the Big Picture
                </h2>
                <p className="text-gray-500 mb-12 max-w-md">
                Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
                </p>
            </FadeIn>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 150} direction="left">
                    <div className="flex items-start group">
                    <span className="flex-shrink-0 w-8 text-xs font-semibold text-gray-400 pt-1">
                        {step.number}
                    </span>
                    <div className="flex-1 pb-8 border-b border-gray-100 group-last:border-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {step.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                        {step.description}
                        </p>
                    </div>
                    </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={600} className="mt-12">
              <button className="bg-olive-100 text-olive-900 px-8 py-3 rounded-full text-sm font-semibold hover:bg-olive-200 transition-colors">
                Discover More
              </button>
            </FadeIn>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <FadeIn direction="right" delay={200}>
                <div className="relative aspect-square sm:aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
                <img 
                    src="https://picsum.photos/seed/minimal_shapes/800/1000" 
                    alt="Abstract representation of organized data" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-olive-900/5 mix-blend-multiply"></div>
                </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
