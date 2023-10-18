import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Signin from './Pages/Signin';
import FirebaseAuth from './Pages/firebaseAuth';
import AddProducts from './Pages/AddProducts';
import Carts from './Pages/Carts';
import PrivateRoute from './Pages/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute> <AddProducts></AddProducts> </PrivateRoute>,
      },
      {
        path: "/cart",
        element: <PrivateRoute> <Carts></Carts> </PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuth>
      <RouterProvider router={router} />
    </FirebaseAuth>
  </React.StrictMode>
);
