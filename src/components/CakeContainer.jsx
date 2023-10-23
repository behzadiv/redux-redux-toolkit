import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeContainer = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cake);

  return (
    <div>
      <h2>Number Of Cake : {state.numOfCake}</h2>
      <div>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch(buyCake(value))}>Buy cake</button>
      </div>
    </div>
  );
};

export default CakeContainer;
