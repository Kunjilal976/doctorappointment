// store.js
import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';
import { userSlice } from './features/userSlice';

const store = configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user:userSlice.reducer
  },
});

export default store;
