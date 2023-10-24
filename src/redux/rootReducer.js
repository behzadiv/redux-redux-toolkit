import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducer";
import MilkReducer from "./milk/milkReducer";
import UserReducer from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: CakeReducer,
  milk: MilkReducer,
  user: UserReducer,
});
