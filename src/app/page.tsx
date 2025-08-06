import ContactUsSection from "./components/ContactUsSection";
import FeaturesSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import OutletTypesSection from "./components/OutletTypesSection";
import ProductShowcase from "./components/ProductShowcase";
import WhyChooseUsSection from "./components/WhyChooseUs";
import Partners from "./components/partners";
import TestimonialSlider from "./components/testimonials";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProductShowcase
          imageUrl={
            // 'https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg'
            null
          }
        />
        <Partners />
        <WhyChooseUsSection />
        <OutletTypesSection />
        <FeaturesSection />
        <ContactUsSection />
        <TestimonialSlider />
        <FAQSection />
        <PricingSection />
      </main>
    </>
  );
}
