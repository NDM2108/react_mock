import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Login } from "../../pages/login/Login";
import { ProductDetails } from "../../pages/products/ProductDetails";
import { Cart } from "../../pages/cart/Cart";
import { Search } from "../../pages/search/Search";

export const router = createBrowserRouter([
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
