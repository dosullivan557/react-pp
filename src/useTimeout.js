import { useCallback, useEffect, useRef } from 'react';

/**
 * A custom hook that returns a setTimeout and clearTimeout functions
 * @param {function} callback - The callback function to be executed after the specified delay
 * @param {number} delay - The delay time in milliseconds
 * @returns {any} The debounced value.
 */
const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};

export default useTimeout;
