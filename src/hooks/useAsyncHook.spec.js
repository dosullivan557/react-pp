/**
 * @jest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react';
// import { act } from "react-dom/test-utils";
import { default as useAsyncHook } from './useAsyncHook';
jest.useFakeTimers();

describe('useAsyncHook', () => {
  it('should set result when the function resolves', async () => {
    const fakeFunction = jest.fn().mockResolvedValue('success');

    const { result } = renderHook(() => useAsyncHook(fakeFunction));

    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(null);
    expect(result.current[2]).toBe(true);

    await waitFor(() => {
      expect(result.current[0]).toBe('success');
      expect(result.current[1]).toBe(null);
      expect(result.current[2]).toBe(false);
    });
  });
  it('should set result when the function resolves', async () => {
    const fakeFunction = jest.fn().mockRejectedValue('woops');

    const { result } = renderHook(() => useAsyncHook(fakeFunction));

    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(null);
    expect(result.current[2]).toBe(true);

    await waitFor(() => {
      expect(result.current[0]).toBe(null);
      expect(result.current[1]).toBe('woops');
      expect(result.current[2]).toBe(false);
    });
  });
});
