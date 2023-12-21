'use client';

import { useEffect } from 'react';
import { setCounter, decrement, increment } from '@/redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { loadState } from '@/redux/localstorage';

export default function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const persistedState = loadState();
  const dispatch = useDispatch();
  useEffect(() => {
    const currentCount = persistedState?.counter.value ?? 0;
    if (currentCount !== null) {
      const parsedValue = parseInt(currentCount, 10);
      dispatch(setCounter(parsedValue));
    }
  }, [dispatch]);

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
