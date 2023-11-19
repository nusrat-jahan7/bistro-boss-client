import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import OurShop from "../Pages/OurShop";
import Dashboard from "../layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
    ],
  },
]);
