/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react';
import { default as useValidatedForm } from './useValidatedForm';

describe('useValidatedForm', () => {
  it('returns the correct value, setValue, and isValid', () => {
    const regex = /^[a-zA-Z]+$/;
    const { result } = renderHook(() => useValidatedForm(regex));
    const [value, setValue, isValid] = result.current;

    expect(value).toBe('');
    expect(typeof setValue).toBe('function');
    expect(isValid).toBe(false);
  });

  it('updates isValid based on the input value and regex', () => {
    const regex = /^[a-zA-Z]+$/;
    const { result } = renderHook(() => useValidatedForm(regex));

    act(() => {
      result.current[1]('abc');
    });
    expect(result.current[2]).toBe(true);
    act(() => {
      result.current[1]('abc123');
    });
    expect(result.current[2]).toBe(false);
  });
});
