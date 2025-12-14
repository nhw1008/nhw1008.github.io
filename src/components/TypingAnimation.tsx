import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

export function TypingAnimation({ text, className = '' }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-purple-300 dark:text-purple-400">|</span>
    </span>
  );
}