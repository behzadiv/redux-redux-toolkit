import { configureStore } from "@reduxjs/toolkit";
import MilkReducer from "../features/milk/milkSlice";
import cakeReducer from "../features/cake/cakeSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: MilkReducer,
    users: userReducer,
  },
});

export default store;
