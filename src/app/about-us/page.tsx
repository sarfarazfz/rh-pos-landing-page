'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Clock,
  Globe,
  BarChart2,
  Smartphone,
  Server,
  Shield,
  Zap,
} from 'lucide-react';
import GetDemoModal from '../components/GetDemoModel';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 to-teal-800 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              About RH POS
            </h1>
            <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
              Modern POS solutions designed for todays restaurants
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 shadow-lg">
                <Image
                  src="https://placehold.co/800x450/teal/white?text=RH+POS+Team"
                  alt="RH POS team"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                <span className="text-teal-600">Redefining</span> restaurant
                technology
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2025, RH POS was created by restaurant industry
                veterans who saw firsthand how outdated most POS systems were.
                We set out to build a solution that actually works for busy
                restaurants.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform combines cutting-edge technology with deep industry
                knowledge to help restaurants streamline operations, increase
                profits, and deliver better guest experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Built with modern technology
            </h2>
            <p className="text-slate-600">
              We leverage the latest tech to deliver a reliable, secure platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Server className="w-6 h-6 text-teal-600" />,
                title: 'Cloud Infrastructure',
                description: 'AWS-powered for maximum reliability',
              },
              {
                icon: <Smartphone className="w-6 h-6 text-teal-600" />,
                title: 'Mobile First',
                description: 'Works seamlessly on all devices',
              },
              {
                icon: <Shield className="w-6 h-6 text-teal-600" />,
                title: 'Bank-grade Security',
                description: 'End-to-end encryption',
              },
              {
                icon: <Zap className="w-6 h-6 text-teal-600" />,
                title: 'Real-time Sync',
                description: 'Instant updates across locations',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200 hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-md flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles - Perfectly Sized Cards */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
              Built different from day one
            </h2>
            <p className="text-xs md:text-sm text-slate-600">
              We are not just another POS company. Here it is what makes us
              different:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                icon: <Users className="w-3.5 h-3.5 text-teal-600" />,
                title: 'User-first design',
                description: 'Intuitive interface for restaurant workflows',
                image:
                  'https://placehold.co/600x400/e5f5f9/teal?text=UX+Design',
              },
              {
                icon: <Globe className="w-3.5 h-3.5 text-teal-600" />,
                title: 'Local expertise',
                description: 'Built for Middle Eastern markets',
                image:
                  'https://placehold.co/600x400/e5f5f9/teal?text=Localized',
              },
              {
                icon: <Clock className="w-3.5 h-3.5 text-teal-600" />,
                title: 'Always improving',
                description: 'Continuous updates from feedback',
                image: 'https://placehold.co/600x400/e5f5f9/teal?text=Updates',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md border border-slate-200 hover:shadow-xs transition-all overflow-hidden group">
                <div className="relative aspect-[5/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-[1.015] transition-transform duration-150"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
                    priority={index < 2} // Only prioritize first 2 images
                  />
                </div>
                <div className="p-2.5 sm:p-3">
                  <div className="w-7 h-7 bg-teal-50 rounded-sm flex items-center justify-center mb-1.5">
                    {item.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-slate-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[0.65rem] text-slate-600 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Optimized Cards */}
      <section className="py-10 md:py-14 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
              Meet the founders
            </h2>
            <p className="text-xs md:text-sm text-slate-600 max-w-md mx-auto">
              The experienced team behind RH POS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {[
              {
                name: 'Sarfaraz Shaikh',
                role: 'Co-Founder & CEO',
                image: 'https://placehold.co/600x600/e5f5f9/teal?text=Ahmed',
                bio: '15+ years in hospitality tech',
              },
              {
                name: 'Javad Sayyad',
                role: 'Co-Founder & CTO',
                image: 'https://placehold.co/600x600/e5f5f9/teal?text=Sarah',
                bio: 'Former lead engineer',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-md border border-slate-200 overflow-hidden hover:shadow-xs transition-all">
                <div className="relative aspect-square w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
                    priority={index === 0} // Only prioritize first image
                  />
                </div>
                <div className="p-2.5 sm:p-3">
                  <h3 className="text-xs font-bold text-slate-800">
                    {member.name}
                  </h3>
                  <p className="text-[0.65rem] text-teal-600 mb-1">
                    {member.role}
                  </p>
                  <p className="text-[0.65rem] text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Our guiding principles
            </h2>
            <p className="text-slate-600">
              The foundation of everything we build at RH POS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Restaurant First',
                description:
                  'Built by restaurateurs for restaurateurs. We speak your language.',
                icon: '🍽️',
                bgColor: 'bg-teal-50',
                borderColor: 'border-teal-100',
              },
              {
                title: 'Relentless Innovation',
                description:
                  'We push boundaries to deliver solutions that actually move your business forward.',
                icon: '🚀',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-100',
              },
              {
                title: 'Transparent Partnerships',
                description:
                  'No hidden fees or surprises. Just honest relationships built on trust.',
                icon: '🤝',
                bgColor: 'bg-amber-50',
                borderColor: 'border-amber-100',
              },
              {
                title: 'Local Expertise',
                description:
                  'Deep understanding of Middle Eastern markets and customs.',
                icon: '🌍',
                bgColor: 'bg-emerald-50',
                borderColor: 'border-emerald-100',
              },
              {
                title: 'Simplicity Wins',
                description:
                  'We remove complexity so you can focus on what matters - your guests.',
                icon: '✨',
                bgColor: 'bg-purple-50',
                borderColor: 'border-purple-100',
              },
              {
                title: 'Joy in Service',
                description:
                  'We love what we do and it shows in every interaction.',
                icon: '😊',
                bgColor: 'bg-rose-50',
                borderColor: 'border-rose-100',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} p-4 sm:p-6 rounded-xl border ${item.borderColor} hover:shadow-md transition-all hover:-translate-y-1 group`}>
                <span className="text-2xl sm:text-3xl mb-3 block transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-700 to-teal-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-12 shadow-lg border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Ready to transform your restaurant?
            </h2>
            <p className="text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join hundreds of restaurants using RH POS to streamline operations
              and grow their business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {/* <button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="bg-teal-600 text-white hover:scale-105 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all border-2 border-teal-600 text-sm sm:text-base">
                Get a Demo
              </button> */}
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openContactModal'));
                }}
                className="bg-white text-teal-600 border-teal-600 hover:scale-105 font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all border-2 text-sm sm:text-base">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <GetDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
