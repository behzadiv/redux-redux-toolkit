import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyMilk } from "../redux/milk/milkActions";

const MilkContainer = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <h2>Number Of Milk : {state.numOfCake}</h2>
      <div>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => buyMilk(value)}>Buy milk</button>
      </div>
    </div>
  );
};

export default MilkContainer;
