import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from '../reducers/authenticationSlice';
import clickerReducer from '../reducers/clickerSlice';



export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    clicker: clickerReducer,
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
