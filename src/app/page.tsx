'use client';

import React from 'react';
import FeaturesSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import Partners from './components/Partners';
import WhyChooseUsSection from './components/WhyChooseUs';
import OutletTypesSection from './components/OutletTypesSection';
import TestimonialSlider from './components/Testimonials';
import ContactModal from './components/ContactModal';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import WhatsAppButton from './components/WhatsappButton';

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
        <WhatsAppButton />
      </main>
    </>
  );
}
