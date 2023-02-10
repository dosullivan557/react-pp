import { useState } from 'react';

/**
 * Custom hook for toggling a boolean value
 *
 * @param {Boolean} defaultValue - Default value for the toggle. Default is `false`.
 *
 * @returns {Array} An array containing the current toggle value and a function to toggle it.
 */

const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  /**
   * Toggles the current value.
   *
   * @param {Boolean} value - The new value for the toggle. If not provided, the value will be negated.
   */
  const toggleValue = (value) => {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
