import { useEffect } from 'react';

const ScrollManager = () => {
  useEffect(() => {
    const { pathname, hash } = window.location;

    if (hash) {
      const id = hash.replace('#', '');

      // Polling mechanism to find the element
      const maxAttempts = 20; // 20 * 100ms = 2 seconds
      let attempts = 0;

      const intervalId = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(intervalId);
        } else if (attempts >= maxAttempts) {
          clearInterval(intervalId);
        }
        attempts++;
      }, 100);

    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollManager;
