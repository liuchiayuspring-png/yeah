import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Palette, Layers, PenTool, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Visual Identity',
    description: 'Distinctive color palettes and logo systems that stand the test of time.'
  },
  {
    icon: Layers,
    title: 'Brand Collateral',
    description: 'Business cards, packaging, and stationery designed with precision.'
  },
  {
    icon: PenTool,
    title: 'Typography',
    description: 'Custom type curation to voice your message clearly and elegantly.'
  },
  {
    icon: BookOpen,
    title: 'Brand Guidelines',
    description: 'Comprehensive rulebooks ensuring consistency across all channels.'
  }
];

export const BrandDesign: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Our Philosophy</p>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-gray-900 mb-10 tracking-tight">
              Identity aimed <br className="hidden sm:block" /> at the future.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We build brands that are timeless, adaptive, and deeply connected to their purpose. Every curve, color, and character is intentional.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work Gallery - 2 Column Offset */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            <FadeIn delay={100} className="space-y-4 group cursor-pointer">
              <div className="overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100">
                <img 
                   src="https://picsum.photos/seed/minimal_stationery/800/1000" 
                   alt="Minimal stationery design" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                   <h3 className="font-serif text-2xl text-gray-900">Nordic Living</h3>
                   <p className="text-gray-500 text-sm mt-1">Retail Identity</p>
                </div>
                <span className="text-olive-900 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Case</span>
              </div>
            </FadeIn>

            <FadeIn delay={300} className="space-y-4 group cursor-pointer md:mt-32">
              <div className="overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100">
                <img 
                   src="https://picsum.photos/seed/packaging_design/800/1000" 
                   alt="Elegant packaging design" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                   <h3 className="font-serif text-2xl text-gray-900">Aesop & Oak</h3>
                   <p className="text-gray-500 text-sm mt-1">Packaging & Print</p>
                </div>
                <span className="text-olive-900 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Case</span>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-olive-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl text-gray-900 mb-16 text-center">Crafting the intangible.</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="bg-white p-8 rounded-2xl border border-olive-100 hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-8 h-8 text-olive-800 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
                <div className="mb-8 text-6xl text-olive-200 font-serif">"</div>
                <blockquote className="font-serif text-3xl sm:text-5xl leading-tight text-gray-900 mb-8">
                Design is the silent ambassador of your brand. It speaks before you do.
                </blockquote>
                <p className="text-sm font-bold uppercase tracking-widest text-olive-900">Paul Rand</p>
            </FadeIn>
        </div>
      </section>
    </div>
  );
};