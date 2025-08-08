<<<<<<< HEAD
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
=======
import ContactUsSection from "./components/ContactUsSection";
import FeaturesSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import OutletTypesSection from "./components/OutletTypesSection";
import ProductShowcase from "./components/ProductShowcase";
import WhyChooseUsSection from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import TestimonialSlider from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
>>>>>>> d1f028844faebb3a9163c0ee7a6d6042ed0d36ef

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
<<<<<<< HEAD
=======
        <PricingSection />
        <ContactUsSection />
>>>>>>> d1f028844faebb3a9163c0ee7a6d6042ed0d36ef
        <TestimonialSlider />
        <FAQSection />
      </main>

      <ContactModal />
    </>
  );
}
