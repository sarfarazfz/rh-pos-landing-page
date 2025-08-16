import { useEffect, useRef } from 'react';

interface UseModalTriggerProps {
  openModal: () => void;
  isModalOpen: boolean;
  storageKey: string;
}

/**
 * A robust hook to automatically trigger a modal based on user behavior.
 * It correctly resets its triggers when the modal is closed, allowing it
 * to reappear on timeout.
 * @param openModal - Function to open the modal.
 * @param isModalOpen - Current state of the modal.
 * @param storageKey - The sessionStorage key to prevent re-triggers after submission.
 */

export const useModalTrigger = ({
  openModal,
  isModalOpen,
  storageKey,
}: UseModalTriggerProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTriggeredRef = useRef(false);

  useEffect(() => {
    const shouldBlock =
      isModalOpen || sessionStorage.getItem(storageKey) === 'true';

    if (shouldBlock) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    const handleScroll = () => {
      if (
        isModalOpen ||
        scrollTriggeredRef.current ||
        sessionStorage.getItem(storageKey)
      ) {
        return;
      }

      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 60) {
        scrollTriggeredRef.current = true;
        openModal();
      }
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (!isModalOpen && !sessionStorage.getItem(storageKey)) {
        openModal();
      }
    }, 2000);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isModalOpen, openModal, storageKey]);
};
