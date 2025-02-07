import React from "react";
//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        path: "ourapp",
        element: <OurApp />,
      },
      {
        path: "users",
        element: <Users />,
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
