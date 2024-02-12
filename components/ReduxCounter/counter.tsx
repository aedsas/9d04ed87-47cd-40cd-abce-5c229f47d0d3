'use client';

import './counter.scss';
import { useEffect } from 'react';
import { setCounter, decrement, increment } from '@/redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { loadState } from '@/redux/localstorage';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export default function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const persistedState = loadState();
  const dispatch = useDispatch();

  // Load the persisted state from local storage
  useEffect(() => {
    const currentCount = persistedState?.counter.value ?? 10;
    if (currentCount !== null) {
      const parsedValue = parseInt(currentCount, 10);
      dispatch(setCounter(parsedValue));
    }
  }, [persistedState, dispatch]);

  // Calculate the variant for the progress bar - Defines the color
  const getVariant = (now: number): string => {
    if (now <= 30) {
      return 'success';
    } else if (now <= 60) {
      return 'info';
    } else if (now <= 90) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  return (
    <div className={'progress-container'}>
      <MinusIcon
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        className="h-6 w-6 text-blue-500"
      />
      <ProgressBar
        variant={getVariant(count)}
        now={count}
        label={`${count}%`}
      />
      <PlusIcon
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className="h-6 w-6 text-blue-500"
      />
    </div>
  );
}
