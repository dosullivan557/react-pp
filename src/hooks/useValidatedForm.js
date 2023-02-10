import { useState, useEffect } from 'react';

/**
 * Custom hook for validating form input with a regular expression
 *
 * @param {RegExp} regex - The regular expression to use for validation.
 *
 * @returns {Array} An array containing the current input value, a function to set the input value, and a boolean indicating whether the input is valid or not.
 */
const useValidatedForm = (regex) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const res = regex.test(value);
    setIsValid(res);
  }, [value, regex]);

  return [value, setValue, isValid];
};

export default useValidatedForm;
