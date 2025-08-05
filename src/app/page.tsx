import FeaturesSection from './components/FeatureSection';
import Header from './components/layout/Header';
import HeroSection from './components/HeroSection';
import OutletTypesSection from './components/OutletTypesSection';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUsSection from './components/WhyChooseUs';
import Footer from './components/layout/Footer';
import ContactUsSection from './components/ContactUsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase
          imageUrl={
            // 'https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg'
            null
          }
        />
        <WhyChooseUsSection />
        <OutletTypesSection />
        <FeaturesSection />
        <ContactUsSection />
        <Footer />
      </main>
    </>
  );
}
