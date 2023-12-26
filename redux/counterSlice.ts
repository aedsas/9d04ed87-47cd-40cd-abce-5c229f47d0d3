import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      if (state.value >= 0 && state.value <= 90) {
        state.value += 10;
      }
    },
    decrement: (state) => {
      if (state.value >= 10) {
        state.value -= 10;
      }
    }
  }
});

export const { setCounter, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
