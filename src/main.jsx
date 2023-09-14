import React from 'react'
import ReactDOM from 'react-dom/client'
//import Router from './components/Router'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from './components/Homepage';
import './index.css'
import ShoppingCart from './components/ShoppingCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/homepage/shoppingcart",
    element: <ShoppingCart />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
