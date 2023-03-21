import './App.css';
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Authentication from './pages/AuthenticationPage/Authentication';
import ProductPage from './pages/ProductPage/ProductPage';
import { useEffect } from 'react';
function App() {
  
  useEffect(()=>{
    return ()=>{
      localStorage.setItem("user","");
      if(window.location.pathname!=='/')
        window.location.pathname='/';
    }
  })
  const router = createBrowserRouter([{
    path:'/',
    element:<LandingPage/>
  },{
    path:'/signin',
    element:<Authentication/>
  },{
    path:'/products',
    element:<ProductPage/>
  }])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
