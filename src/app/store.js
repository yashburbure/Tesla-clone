import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/Carslice";

export const store = configureStore({
  reducer: {
    car:carReducer
  },
});
