import { useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Authentication from "./pages/AuthenticationPage/Authentication";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  useEffect(() => {
    localStorage.setItem("Gold", 1000);
    localStorage.setItem("Silver", 100);
    if (window.location.pathname !== "/") 
        window.location.pathname = "/";
      
    return () => {
      localStorage.setItem("user", "");
      localStorage.setItem("userId", "");
      localStorage.setItem("Gold", 1000);
      localStorage.setItem("Silver", 100);
    };
  },[]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <Authentication />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/cart",
      element: <CartPage/>,
    },
    {
      path:"/orders",
      element:<OrderPage/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
