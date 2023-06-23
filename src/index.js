import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./features/home/Home";
import "./css/index.css";
import { Login } from "./features/authenticate/login/Login";
import { Provider } from "react-redux";
import store from "./app/store";
import { ProductDetails } from "./features/products/ProductDetails";
import { Cart } from "./features/cart/Cart";
import { Search } from "./features/search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/details",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
