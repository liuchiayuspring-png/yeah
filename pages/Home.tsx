import React from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { FeatureSection } from '../components/FeatureSection';
import { ComparisonTable } from '../components/ComparisonTable';
import { Testimonial } from '../components/Testimonial';
import { Process } from '../components/Process';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FeatureSection />
      <ComparisonTable />
      <Testimonial />
      <Process />
    </>
  );
};