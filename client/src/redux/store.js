// store.js
import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';

const store = configureStore({
  reducer: {
    alerts: alertSlice.reducer,
  },
});

export default store;
