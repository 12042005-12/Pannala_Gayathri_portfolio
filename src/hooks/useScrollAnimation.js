import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after animation
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    useEffect(() => {
  const currentElement = ref.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (currentElement) {
    observer.observe(currentElement);
  }

  return () => {
    if (currentElement) {
      observer.unobserve(currentElement);
    }
  };
}, [ref]);
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

export default useScrollAnimation;



