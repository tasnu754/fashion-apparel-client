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
import BrandProducts from './Pages/BrandProducts';
import ProductDetails from './Pages/ProductDetails';


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
        element: (
          <PrivateRoute>
            {" "}
            <AddProducts></AddProducts>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            {" "}
            <Carts></Carts>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:name",
        element: <BrandProducts></BrandProducts>,
        loader: () =>
          fetch("https://fashion-apparel-server-five.vercel.app/brand"),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fashion-apparel-server-five.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
        // loader: () => fetch("http://localhost:5000/carts"),
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
