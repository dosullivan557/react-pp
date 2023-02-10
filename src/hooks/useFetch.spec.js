/**
 * @jest-environment jsdom
 */
import { default as useFetch } from './useFetch';
import { renderHook, fireEvent, act, waitFor } from '@testing-library/react';

// jest.mock("fetch", () =>
//   jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve({ data: "mocked response" }),
//     })
//   )
// );

describe('useFetch', () => {
  it('fetches data from the API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'mocked response' })
      })
    );
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result } = renderHook(() => useFetch(url, body, headers));
    // Act
    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });
    expect(result.current[0]).toEqual({ data: 'mocked response' });
  });

  it('handles errors while fetching data from the API', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('mocked error')));
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result } = renderHook(() => useFetch(url, body, headers));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });
    expect(result.current[1].message).toEqual('mocked error');
    expect(result.current[2]).toEqual(false);
  });

  it('updates the body and headers', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'mocked response' })
      })
    );
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result, rerender } = renderHook(() => useFetch(url, body, headers));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });

    const newHeaders = { 'Content-Type': 'text/plain' };
    const newBody = { name: 'Jane Doe' };

    rerender(() => useFetch(url, newBody, newHeaders));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });

    expect(result.current[0]).toEqual({ data: 'mocked response' });
  });
  it('fetches data using POST method', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'mocked response' })
      })
    );
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result } = renderHook(() => useFetch(url, body, headers, 'POST'));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });

    expect(result.current[0]).toEqual({ data: 'mocked response' });
  });
});
