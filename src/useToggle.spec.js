/**
 * @jest-environment jsdom
 */
const { default: useToggle } = require('./useToggle');
import * as React from 'react';
import { renderHook, act } from '@testing-library/react';

test('Default value', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current[0]).toEqual(false);
  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toEqual(true);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toEqual(false);
});
test('Negate', () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current[0]).toEqual(true);
  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toEqual(false);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toEqual(true);
});
test('set value different value', () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current[0]).toEqual(true);
  act(() => {
    result.current[1](false);
  });

  expect(result.current[0]).toEqual(false);
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toEqual(true);
});
test('set value same value', () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current[0]).toEqual(true);
  act(() => {
    result.current[1](true);
  });

  expect(result.current[0]).toEqual(true);
  act(() => {
    result.current[1](false);
  });
  expect(result.current[0]).toEqual(false);
  act(() => {
    result.current[1](false);
  });
  expect(result.current[0]).toEqual(false);
});
