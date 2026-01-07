import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Smartphone, Monitor, Layout, Code } from 'lucide-react';

export const WebDesign: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Digital Experiences</p>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-gray-900 mb-10 tracking-tight">
              Immersive worlds, <br className="hidden sm:block" /> pixel by pixel.
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between aesthetics and functionality. Our websites are designed to engage, convert, and inspire.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Large Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
         <div className="max-w-7xl mx-auto">
             <FadeIn delay={200} direction="up" className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-video group">
                 <img 
                    src="https://picsum.photos/seed/website_mockup_modern/1920/1080" 
                    alt="Modern website interface" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Live Project
                    </button>
                 </div>
             </FadeIn>
         </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 gap-16 items-center">
               <FadeIn>
                   <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6">
                       A user-first approach.
                   </h2>
                   <p className="text-gray-500 text-lg mb-8">
                       Beauty is essential, but usability is paramount. We design with the user's journey in mind, creating seamless flows that feel natural.
                   </p>
                   <ul className="space-y-6">
                       {[
                           { title: 'UX Research', desc: 'Understanding your audience before a single pixel is placed.' },
                           { title: 'Wireframing', desc: 'Structural blueprints to ensure logical information architecture.' },
                           { title: 'High-Fidelity UI', desc: 'Applying the visual layer with precision and flair.' },
                           { title: 'Interactive Prototyping', desc: 'Testing motion and flow to refine the experience.' }
                       ].map((item, i) => (
                           <li key={i} className="flex items-start">
                               <span className="flex-shrink-0 w-6 h-6 rounded-full bg-olive-200 flex items-center justify-center text-olive-900 text-xs font-bold mt-1 mr-4">{i + 1}</span>
                               <div>
                                   <h4 className="font-medium text-gray-900">{item.title}</h4>
                                   <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                               </div>
                           </li>
                       ))}
                   </ul>
               </FadeIn>
               <FadeIn direction="right" delay={200}>
                   <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-12">
                            <div className="bg-white p-4 rounded-2xl shadow-sm aspect-[3/4]">
                                <Monitor className="w-8 h-8 text-gray-300 mb-4" />
                                <div className="h-2 w-12 bg-gray-100 rounded mb-2"></div>
                                <div className="h-2 w-full bg-gray-50 rounded"></div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm aspect-square bg-olive-900 flex items-center justify-center">
                                <span className="text-olive-100 font-serif text-4xl italic">Aa</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-2xl shadow-sm aspect-square bg-olive-100 flex items-center justify-center">
                                <Layout className="w-10 h-10 text-olive-800" />
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm aspect-[3/4]">
                                <Smartphone className="w-8 h-8 text-gray-300 mb-4" />
                                <div className="h-2 w-12 bg-gray-100 rounded mb-2"></div>
                                <div className="h-2 w-full bg-gray-50 rounded"></div>
                                <div className="h-2 w-2/3 bg-gray-50 rounded mt-2"></div>
                            </div>
                        </div>
                   </div>
               </FadeIn>
           </div>
        </div>
      </section>

      {/* Tech Stack / Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
              <FadeIn className="text-center mb-16">
                  <h2 className="font-serif text-3xl text-gray-900">Built for performance</h2>
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                      { icon: Smartphone, label: 'Fully Responsive' },
                      { icon: Code, label: 'Clean Code' },
                      { icon: Monitor, label: 'Cross-Browser' },
                      { icon: Layout, label: 'Scalable Design' }
                  ].map((feat, idx) => (
                      <FadeIn key={idx} delay={idx * 50} className="flex flex-col items-center justify-center p-8 border border-gray-100 rounded-2xl hover:border-olive-200 transition-colors">
                          <feat.icon className="w-8 h-8 text-gray-400 mb-4" />
                          <span className="font-medium text-gray-900">{feat.label}</span>
                      </FadeIn>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};