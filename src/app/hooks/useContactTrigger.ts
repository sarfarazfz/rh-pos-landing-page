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
  const hasTriggeredScroll = useRef(false);

  useEffect(() => {
    const isFormSubmitted =
      sessionStorage.getItem('contactFormSubmitted') === 'true';

    if (isFormSubmitted) {
      return;
    }
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (
        scrollPercentage >= 60 &&
        !isModalOpen &&
        !hasTriggeredScroll.current &&
        sessionStorage.getItem('contactFormSubmitted') !== 'true'
      ) {
        hasTriggeredScroll.current = true;
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
      }, 40000);
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
