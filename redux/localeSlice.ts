import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LocaleState {
  value: string;
}

const initialState: LocaleState = {
  value: 'DE'
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;
