import React from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './containers/about';
import ContactUs from "./containers/contact-us";
import Login from "./containers/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import App from "./src/App";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/contactus",
        element: <ContactUs />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/",
        element: <App />
    },
    
])

reactDom.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
