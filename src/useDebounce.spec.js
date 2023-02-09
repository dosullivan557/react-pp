/**
 * @jest-environment jsdom
 */
import { renderHook, fireEvent, act, waitFor } from '@testing-library/react';
import { default as useDebounce } from './useDebounce';

describe('useDebounce', () => {
  it('should return the debounced value', () => {
    let value = 'initial';
    let delay = 1000;
    const mockFunc = jest.fn();

    let x = 1;
    const { result } = renderHook(() => useDebounce(mockFunc, 1000, [x]));

    x = 5;

    waitFor(() => {
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
