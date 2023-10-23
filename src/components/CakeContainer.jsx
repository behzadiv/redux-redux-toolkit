import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <h2>Number Of Cake : {state.numOfCake}</h2>
      <div>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch({ type: "BUY_CAKE", payload: value })}>
          Buy cake
        </button>
      </div>
    </div>
  );
};

export default CakeContainer;
