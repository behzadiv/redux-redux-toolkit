import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducer";
import MilkReducer from "./milk/milkReducer";


export const rootReducer = combineReducers({
  cake: CakeReducer,
  milk: MilkReducer,
});
