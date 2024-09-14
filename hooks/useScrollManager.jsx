import { useState, useEffect } from 'react';

const useScrollManager = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавний скрол
    });
  };
  return {
    showButton,
    smoothScrollToTop,
  };
};

export default useScrollManager;
