import React, { useState } from "react";

export default function Counter({ interval }) {
  const [counter, setCounter] = useState(0);
  const handleButtonPress = (value) => {
    setCounter((oldState) => oldState + value);
  };

  const handleResetCounter = () => {
    setCounter(0);
  };
  return (
    <div style={{ width: "100%", padding: "3rem" }}>
      <button
        className="btn btn-success"
        onClick={() => {
          //   setCounter((oldState) => oldState + interval);
          handleButtonPress(interval);
        }}
      >
        Aumentar
      </button>
      <span className="fw-bolder font-xl"> {counter} </span>
      <button
        className="btn btn-success"
        onClick={() => {
          //   setCounter((oldState) => oldState - interval);
          handleButtonPress(-interval);
        }}
      >
        Disminuir
      </button>
      <button className="btn btn-success" onClick={handleResetCounter}>
        Reiniciar
      </button>
    </div>
  );
}

// const Counter = () => {
//   return <div>Counter</div>;
// };

// export default Counter;
