import React from "react";
import { useDispatch } from "react-redux";
import { resetAuth } from "../redux/slices/authSlice";
import { taskThunk } from "../redux/operations/authOperations";
export default function App() {
  const dispatch = useDispatch();
  return (
    <div>
      Inside APP
      <button
        type="button"
        onClick={() => {
          localStorage.clear();
          dispatch(resetAuth());
        }}
      >
        Logout
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(taskThunk());
        }}
      >
        Llamado a la API(Ejem: Obteniendo tareas del todo)
      </button>
    </div>
  );
}
