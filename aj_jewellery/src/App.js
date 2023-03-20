import './App.css';
import { createBrowserRouter,RouterProvider,Route,Link,Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Authentication from './pages/AuthenticationPage/Authentication';
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<LandingPage/>
  },{
    path:'/signin',
    element:<Authentication/>
  },])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
