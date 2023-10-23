import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
    </Provider>
  );
}

export default App;
