import { createStore } from "redux";
import CakeReducer from "./cake/cakeReducer";

const store = createStore(CakeReducer);

export default store;
