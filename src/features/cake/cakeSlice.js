import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};

// export default function CakeReducer(state = initialState, action) {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - action.payload,
//       };
//     default:
//       return state;
//   }
// }
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.numOfCake = state.numOfCake - action.payload;
    },
  },
});

export const { buyCake } = cakeSlice.actions;
export default cakeSlice.reducer;
