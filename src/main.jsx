import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from "./Layout.jsx";
import Women from "./Section/Women/Women.jsx";
import WomenProductDetails from "./Section/Women/WomenProductDetails.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <App/>
      },
      {
        path: "collection/women",
        element: <Women />
      },
      {
        path: "/product",
        element: <WomenProductDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
