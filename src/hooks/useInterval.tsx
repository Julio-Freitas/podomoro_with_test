import { useEffect, useRef, useCallback } from 'react';

export default function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const savedCallback = useRef<C>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = useCallback(
    () => savedCallback.current && savedCallback.current(),
    [savedCallback],
  );

  useEffect(() => {
    tick();

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, tick]);
}
