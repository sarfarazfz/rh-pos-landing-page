'use client';
import React from 'react';
import WhatsAppButton from '../components/WhatsappButton';
import HeroSection from './components/HeroSection';
import FoundingStory from './components/FoundingStory';
import TechStack from './components/TechStack';
import CorePrinciples from './components/CorePrinciples';
import ValuesSection from './components/ValuesSection';
import CTASection from './components/CTASection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FoundingStory />
      <TechStack />
      <CorePrinciples />
      <ValuesSection />
      <CTASection />
      <WhatsAppButton />
    </main>
  );
}
