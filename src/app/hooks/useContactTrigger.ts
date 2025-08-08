import { useEffect, useRef } from 'react';

interface UseContactTriggerProps {
  openModal: () => void;
  isModalOpen: boolean;
}

export const useContactTrigger = ({
  openModal,
  isModalOpen,
}: UseContactTriggerProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollListenerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Check if form has been previously submitted
    const isFormSubmitted =
      localStorage.getItem('contactFormSubmitted') === 'true';

    if (isFormSubmitted) {
      // If form was already submitted, don't set up any triggers
      return;
    }

    // Scroll trigger - opens modal when user scrolls 70% down the page
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 70 && !isModalOpen) {
        openModal();
      }
    };

    // Timeout trigger - opens modal every 15 seconds if not already open
    const setTimeoutTrigger = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (
          !isModalOpen &&
          localStorage.getItem('contactFormSubmitted') !== 'true'
        ) {
          openModal();
        }
        // Set up next timeout
        setTimeoutTrigger();
      }, 15000);
    };

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);
    scrollListenerRef.current = handleScroll;

    // Set up timeout trigger
    setTimeoutTrigger();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [openModal, isModalOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (scrollListenerRef.current) {
        window.removeEventListener('scroll', scrollListenerRef.current);
      }
    };
  }, []);
};
