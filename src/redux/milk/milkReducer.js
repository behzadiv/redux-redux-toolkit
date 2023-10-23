import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfMilk: 20,
};

export function MilkReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...state,
        numOfMilk: state.numOfMilk - action.payload,
      };
    default:
      return state;
  }
}
