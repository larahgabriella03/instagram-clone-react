import { useState, useCallback } from 'react';

export function useLike(initialCount, initialLiked = false) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  const toggle = useCallback(() => {
    setLiked((prev) => {
      setCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  }, []);

  return { liked, count, toggle };
}
