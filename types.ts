import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureStep {
  number: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  area: boolean | string;
  webSurge: boolean | string;
  hyperView: boolean | string;
}
