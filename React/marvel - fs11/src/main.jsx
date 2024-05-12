import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./router/Navigation.jsx";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Navigation></Navigation>
  </Provider>
);
