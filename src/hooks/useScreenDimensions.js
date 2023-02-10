import { useState, useEffect } from 'react';

/**
 * Custom hook for getting the current screen dimensions
 *
 * @returns {Object} An object with `width` and `height` properties, representing the current screen dimensions.
 */
const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenDimensions;
};
export default useScreenDimensions;
