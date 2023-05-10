import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Authentication from "./pages/AuthenticationPage/Authentication";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useEffect } from "react";
import Product from "./components/Product/Product";
function App() {
  useEffect(() => {
    if (window.location.pathname !== "/") 
        window.location.pathname = "/";
    return () => {
      localStorage.setItem("user", "");
      localStorage.setItem("userId", "");
      localStorage.setItem("gold", 1000);
      localStorage.setItem("silver", 100);
     
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
      path: "/product",
      element: <Product />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
