import "./App.css";
import { useState } from "react";
function App() {
  let [valor, setValor] = useState(0);

  const handleIncrement = () => {
    setValor(valor + 1);
  };
  return (
    <>
      {valor}
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
