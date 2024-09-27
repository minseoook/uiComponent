import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;
