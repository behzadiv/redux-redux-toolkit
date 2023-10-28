import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyMilk } from "../features/milk/milkSlice";

const MilkContainer = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.milk);

  return (
    <div>
      <h2>Number Of Milk : {state.numOfMilk}</h2>
      <div>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch(buyMilk(value))}>Buy milk</button>
      </div>
    </div>
  );
};

export default MilkContainer;
