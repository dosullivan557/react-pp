/**
 * @jest-environment jsdom
 */
import { act, renderHook } from '@testing-library/react';
import { default as useScreenDimensions } from './useScreenDimensions';

describe('useScreenDimensions', () => {
  it('returns the correct screen dimensions', () => {
    // Arrange
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 500
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 600
    });

    // Act
    const { result } = renderHook(() => useScreenDimensions());

    // Assert
    expect(result.current).toEqual({ width: 500, height: 600 });
  });
  it('updates the screen dimensions when the window is resized', () => {
    // Arrange
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 500
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 600
    });

    // Act
    const { result } = renderHook(() => useScreenDimensions());
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 800
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 700
    });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    // Assert
    expect(result.current).toEqual({ width: 800, height: 700 });
  });
});
