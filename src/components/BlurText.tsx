import { useState, useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'characters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
};

const gradientTextClasses = "bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent";

const BlurText = ({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className
}: BlurTextProps) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  
  const items = useMemo(() => animateBy === 'words' ? text.split(' ') : text.split(''), [text, animateBy]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const animationPromises = items.map((_, index: number) => 
        new Promise<void>((resolve) => {
          setTimeout(() => {
            setAnimatedItems((prev: boolean[]) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve();
          }, index * 150); // 150ms delay between each item
        })
      );
      
      Promise.all(animationPromises).then(() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      });
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay, items, onAnimationComplete]);
  
  const getDirectionClasses = () => {
    switch (direction) {
      case 'top':
        return 'translate-y-4 opacity-0 blur-sm';
      case 'bottom':
        return '-translate-y-4 opacity-0 blur-sm';
      case 'left':
        return 'translate-x-4 opacity-0 blur-sm';
      case 'right':
        return '-translate-x-4 opacity-0 blur-sm';
      default:
        return 'translate-y-4 opacity-0 blur-sm';
    }
  };
  
  const getAnimatedClasses = () => {
    switch (direction) {
      case 'top':
        return 'translate-y-0 opacity-100 blur-0';
      case 'bottom':
        return 'translate-y-0 opacity-100 blur-0';
      case 'left':
        return 'translate-x-0 opacity-100 blur-0';
      case 'right':
        return 'translate-x-0 opacity-100 blur-0';
      default:
        return 'translate-y-0 opacity-100 blur-0';
    }
  };
  
  return (
    <div className={twMerge("flex flex-wrap justify-center", className)}>
      {items.map((item: string, index: number) => (
        <span
          key={index}
          className={twMerge(
            gradientTextClasses,
            "inline-block transition-all duration-700 ease-out",
            animatedItems[index] 
              ? getAnimatedClasses()
              : getDirectionClasses()
          )}
          style={{
            transitionDelay: `${index * 150}ms`
          }}
        >
          {item}
          {animateBy === 'words' && index < items.length - 1 && '\u00A0'}
        </span>
      ))}
    </div>
  );
};

export default BlurText; 