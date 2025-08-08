'use client';

import React from 'react';

// Section components
import FeaturesSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import Partners from './components/partners';
import WhyChooseUsSection from './components/WhyChooseUs';
import OutletTypesSection from './components/OutletTypesSection';
import TestimonialSlider from './components/testimonials';
import ContactModal from './components/ContactModal';
import FAQSection from './components/FAQSection';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProductShowcase imageUrl={null} />
        <Partners />
        <WhyChooseUsSection />
        <OutletTypesSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialSlider />
        <FAQSection />
      </main>

      <ContactModal />
    </>
  );
}
