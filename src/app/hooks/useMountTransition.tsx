import { useState, useEffect } from 'react';

interface UseMountTransitionProps {
  isOpen: boolean;
  duration: number;
}

export const useMountTransition = ({
  isOpen,
  duration,
}: UseMountTransitionProps) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    let renderTimeout: NodeJS.Timeout;
    let animationTimeout: NodeJS.Timeout;

    if (isOpen) {
      setIsRendered(true);
      animationTimeout = setTimeout(() => {
        setIsAnimatingIn(true);
      }, 20);
    } else {
      setIsAnimatingIn(false);
      renderTimeout = setTimeout(() => {
        setIsRendered(false);
      }, duration);
    }

    return () => {
      clearTimeout(renderTimeout);
      clearTimeout(animationTimeout);
    };
  }, [isOpen, duration]);

  return { isRendered, isAnimatingIn };
};
