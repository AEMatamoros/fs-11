import React from "react";

export default function Button({ type, text, click, className }) {
  return (
    <button
      className={`btn btn-${type} ${!!className && className}`}
      onClick={() => {
        click();
      }}
    >
      {text}
    </button>
  );
}
