import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import User from "./components/User";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <User />
    </Provider>
  );
}

export default App;
