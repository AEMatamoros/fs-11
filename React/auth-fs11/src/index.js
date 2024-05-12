import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./Navigation";
import { store, persistedStore } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Navigation />
    </PersistGate>
  </Provider>
);
