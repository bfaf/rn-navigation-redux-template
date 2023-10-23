import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/messageSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
