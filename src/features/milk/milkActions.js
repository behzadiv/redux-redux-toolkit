import { BUY_MILK } from "./milkTypes";

export const buyMilk = (milk = 1) => {
  return {
    type: BUY_MILK,
    payload: milk,
  };
};
