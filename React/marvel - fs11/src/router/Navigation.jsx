import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/Layout";
import App from "../views/Hero";
import CharacterDetail from "../views/CharacterDetail";
export default function Navigation() {
  const router = createHashRouter([
    {
      path: "/",
      errorElement: <h1>Error al cargar el componente</h1>,
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App></App>,
        },
        {
          path: "/:id",
          element: <CharacterDetail></CharacterDetail>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
