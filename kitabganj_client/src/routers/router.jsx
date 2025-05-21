import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const BASE_URL = "https://kitabganj-fresh-1.onrender.com";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          const res = await fetch(`${BASE_URL}/book/${params.id}`);
          if (!res.ok) throw new Response("Not Found", { status: 404 });
          return res.json();
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: (
          <PrivateRoute>
            <UploadBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/manage",
        element: (
          <PrivateRoute>
            <ManageBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: async ({ params }) => {
          const res = await fetch(`${BASE_URL}/book/${params.id}`);
          if (!res.ok) throw new Response("Not Found", { status: 404 });
          return res.json();
        },
      },
    ],
  },
  { path: "/sign-up", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
]);

export default router;
