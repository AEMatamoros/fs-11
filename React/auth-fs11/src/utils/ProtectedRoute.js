import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../redux/selectors/authSelectors";
export default function ProtectedRoute({ children }) {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? children : <Navigate to="/" />;
}
