
import React from 'react';

interface PageIntroProps {
  title: string;
  subtitle: string;
}

export const PageIntro: React.FC<PageIntroProps> = ({ title, subtitle }) => (
  <div className="bg-gray-50 py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h1 data-aos="fade-down" className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h1>
      <p data-aos="fade-up" data-aos-delay="100" className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  </div>
);
