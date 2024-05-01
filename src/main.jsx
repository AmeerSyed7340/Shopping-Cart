import React from "react";
import ReactDOM from "react-dom/client";
//import Router from './components/Router'
import App from "./App";
import VideoComp from "./components/VideoComp";
import { Products } from "./components/Products";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const allProd = "https://fakestoreapi.com/products";
const jewelryProd = 'https://fakestoreapi.com/products/category/jewelery';
const menProd = "https://fakestoreapi.com/products/category/men's clothing";
const womenProd = "https://fakestoreapi.com/products/category/women's clothing";
const electronicsProd = 'https://fakestoreapi.com/products/category/electronics';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoComp />,
      },
      {
        path: "/products",
        element: <Products allProd={allProd}/>,
      },
      {
        path: "/men",
        element: <Products allProd={menProd}/>,
      },
      {
        path: "/women",
        element: <Products allProd={womenProd}/>,
      },
      {
        path: "/electronics",
        element: <Products allProd={electronicsProd}/>,
      },
      {
        path: "/jewelry",
        element: <Products allProd={jewelryProd}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
