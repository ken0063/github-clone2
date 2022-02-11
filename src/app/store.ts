import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchRepoReducer from '../app/pages/RepoPage/slice';
import searchUserReducer from '../app/pages/UserPage/slice';

export const store = configureStore({
  reducer: {
    searchRepo: searchRepoReducer,
    searchUser: searchUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
