import React from "react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
