import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransformClasses = () => {
    if (!isVisible) {
       switch (direction) {
        case 'up': return 'translate-y-12';
        case 'down': return '-translate-y-12';
        case 'left': return 'translate-x-12';
        case 'right': return '-translate-x-12';
        default: return '';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  const opacityClass = isVisible ? 'opacity-100' : 'opacity-0';

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out transform ${getTransformClasses()} ${opacityClass} ${fullWidth ? 'w-full' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
