import { useState } from 'react';

/**
 * Custom hook for handling async operations
 *
 * @param {Function} func - The async function to be executed.
 *
 * @returns {Array} An array containing the result of the async function (if successful), any error (if there was one), and a boolean indicating if the function is still loading.
 */

const useAsyncHook = (func) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const runner = async () => {
    try {
      const result = await func();
      setResult(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  runner();

  return [result, error, isLoading];
};

export default useAsyncHook;
