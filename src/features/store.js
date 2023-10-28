import { configureStore } from "@reduxjs/toolkit";
import MilkReducer from "../features/milk/milkSlice";
import cakeReducer from "../features/cake/cakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: MilkReducer,
  },
});

export default store;
