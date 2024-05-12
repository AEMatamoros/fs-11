import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistedStore } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
