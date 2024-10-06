import { configureStore } from "@reduxjs/toolkit";
import CalSlice from "../feature/calculatorSlice";

export const store = configureStore({
  reducer: CalSlice,
});
