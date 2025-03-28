// Scroll Animation Utility
// Provides consistent animation effects for elements that appear on scroll

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Default animation variants for fade-in effect
export const fadeInVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35, // Faster animation
      ease: [0.25, 0.1, 0.25, 1] // Natural easing
    }
  }
};

// Hook for simple fade-in animation on scroll
export const useFadeInOnScroll = (threshold = 0.15, delay = 0, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: "-50px 0px"
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible", { delay });
    }
  }, [controls, inView, delay]);

  return { ref, controls, variants: fadeInVariants };
};

// Hook for staggered animation of multiple items
export const useStaggeredFadeIn = (index, itemsPerRow = 1, threshold = 0.15, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin: "-50px 0px"
  });

  useEffect(() => {
    if (inView) {
      // Calculate delay based on position in grid
      // For a grid layout, we want items in the same row to animate together
      const rowIndex = Math.floor(index / itemsPerRow);
      const delay = 0.1 + (rowIndex * 0.075); // Reduced delay for faster animation
      
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          delay, 
          duration: 0.35, 
          ease: [0.25, 0.1, 0.25, 1] // Natural easing
        }
      });
    }
  }, [controls, inView, index, itemsPerRow]);

  return { ref, controls };
};
