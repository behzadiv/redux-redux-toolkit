
const initialState = {
  numOfCake: 10,
};

export default function CakeReducer(state = initialState, action) {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    default:
      return state;
  }
}
