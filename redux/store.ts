import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/counterSlice';
import localeReducer from '@/redux/localeSlice';
import { saveState } from '@/redux/localstorage';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    locale: localeReducer
  }
});

store.subscribe(() => {
  saveState(store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
