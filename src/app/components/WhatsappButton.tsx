'use client';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
      '_blank'
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-4 left-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2
    px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3
    text-sm sm:text-base md:text-lg
    z-50
    ${
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10 pointer-events-none'
    }`}
      aria-label="Contact via WhatsApp">
      <FaWhatsapp className="text-white" size={20} />
      <span className="hidden sm:inline text-white font-medium">
        Talk to us
      </span>
    </button>
  );
}
