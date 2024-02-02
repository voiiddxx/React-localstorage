
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './view/Auth/Register';
import Login from './view/Auth/Login';
import Home from "./view/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Register/>,
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/home',
    element:<Home/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
