import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";



// createBrowserRouter is used to create the router for our application.
// we will pass it an array of route objects as its argument.each route object will have a routing path and a corresponding element
// to be rendered on that path.
const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/profile/:id",// notice that in this path. we have assed a /:id at the end this creates a URL parameter-
        //  a segment that can change and that contains data we can use in our components. 
        // this notation makes this react router a duynamic route.
        element:<UserProfile/>
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
//  adding additional routers.
// in this instance we are adding routers ofr Abut and Login
// we will first make two new components within our pages directory.
// then import these components into index.js and add the routers in the array of objects.

// LINKS AND NAV LINKS.
// React routers provides two compoentns that allow users to navigate through our page using client side routing link and navlink.
//

// Dynamic routes an URL parameters.
