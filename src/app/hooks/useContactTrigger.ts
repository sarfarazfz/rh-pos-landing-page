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
    const isFormSubmitted =
      sessionStorage.getItem('contactFormSubmitted') === 'true';

    if (isFormSubmitted) {
      return;
    }

    // Scroll trigger - opens modal when user scrolls 70% down the page
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      if (scrollPercentage >= 99.5 && !isModalOpen) {
        openModal();
      }
    };

    const setTimeoutTrigger = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (
          !isModalOpen &&
          sessionStorage.getItem('contactFormSubmitted') !== 'true'
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
