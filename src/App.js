import "./App.css";
import Routing from "./routes";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
