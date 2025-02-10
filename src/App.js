import React from "react";
//Router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
//Globalstyle
import GlobalStyle from "./components/GlobalStyle";
//pages
import Home from "./pages/Home";
import OurApp from "./pages/OurApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./pages/Users";
import AppLayout from "./pages/AppLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "our-app",
        element: <OurApp />,
      },
      {
        path: "users",
        element: <Users />,
      }, // Catch-all route to handle invalid URLs and redirect to home
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        toastOptions={{
          style: {
            fontSize: "16px",
            minWidth: "1000px",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
