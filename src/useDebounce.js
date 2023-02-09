import { useEffect } from 'react';
import { default as useTimeout } from './useTimeout';
/**

/**
 * A custom hook that returns a setTimeout and clearTimeout functions
 * @param {function} callback - The callback function to be executed after the specified delay
 * @param {number} delay - The delay time in milliseconds
 * @param {array} dependencies - An array of dependencies used by the useEffect hook
 * @returns {any} The debounced value.
 */

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};
export default useDebounce;
