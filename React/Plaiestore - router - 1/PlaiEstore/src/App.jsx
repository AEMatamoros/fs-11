import "./App.css";

import { createContext, useState } from "react";
import Router from "./routes/Router";
export const AppContext = createContext({});

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <AppContext.Provider
      value={{
        userName: "Alev",
        firstName: "Alexis",
        lastName: "Matamoros",
        age: 27,
        isLogged,
        setIsLogged,
      }}
    >
      <Router></Router>
    </AppContext.Provider>
  );
}

export default App;
