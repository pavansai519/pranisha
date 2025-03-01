import React, { useState, useRef, useEffect, useCallback } from "react";
import CountUp from "react-countup";

export default function CounterUp({ count = 100, time = 2, suffix = "", threshold = 0.5, className = "" }) {
  const [counterOn, setCounterOn] = useState(false);
  const counterRef = useRef(null);

  // Memoized observer callback for efficiency
  const handleIntersection = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      setCounterOn(true);
      observer.disconnect(); // Stop observing after it triggers
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(handleIntersection, { threshold });

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    } else {
      // Fallback for unsupported environments
      setCounterOn(true);
    }
  }, [handleIntersection, threshold]);

  return (
    <div ref={counterRef} className={`counter-up ${className}`}>
      {counterOn && <CountUp end={count} duration={time} suffix={suffix} />}
    </div>
  );
}