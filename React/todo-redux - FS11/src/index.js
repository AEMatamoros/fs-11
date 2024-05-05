import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { store } from "./redux/store/store";
// import { store } from "./redux-toolkit/store/store";
// import { store } from "./redux-toolkit-slice/store/store";
// import { store } from "./redux-toolkit-async/store/store";
import { store, persistedStore } from "./redux-toolkit-thunk/store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Redux
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
