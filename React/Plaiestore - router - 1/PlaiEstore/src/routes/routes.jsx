import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Header from "../Components/Header";
import NotFound from "../views/NotFound";
import AboutPricing from "../views/AboutPricing";
import Product from "../views/Product";
import Landing from "../views/Landing";
// import { lazy } from "react";

// Solo se van a utilizar si son necesarios
// const MyComponent = lazy(() => import("path/to/MyComponent"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound></NotFound>,
    element: (
      <>
        <Header></Header>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Header></Header>
        <Product></Product>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header></Header>
        <About></About>
      </>
    ),
    children: [
      {
        path: "/about/tecs",
        // element: <AboutTecnologies></AboutTecnologies>,
        lazy: async () => {
          const { AboutTecnologies } = await import(
            "../views/AboutTecnologies"
          );
          return { Component: AboutTecnologies };
        },
      },
      {
        path: "/about/price",
        element: <AboutPricing></AboutPricing>,
      },
    ],
  },
  {
    path: "/landing",
    element: (
      <>
        <Header></Header>
        <Landing></Landing>
      </>
    ),
  },
]);

export default router;
