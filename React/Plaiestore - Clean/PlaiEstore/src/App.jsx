import useFetch from "./hooks/useFetch";
import Home from "./Components/Home";
import Header from "./Components/Header";
import "./App.css";

import { createContext, useState } from "react";
export const AppContext = createContext({});

function App() {
  const [isLogged, setIsLogged] = useState(true);
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
      <Header></Header>
      <Home></Home>
    </AppContext.Provider>
  );
}

export default App;
