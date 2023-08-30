import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Pages/Home.jsx";
import Bookmanagement from "./component/Pages/Bookmanagement.jsx";
import NavBar from "./component/Organisms/Navbar.jsx";
import BookContextProvider from "./context/BookContext.jsx";
// import { BookContextProvider } from "./context/BookContext.jsx";

const routes = [
  {
    element: <NavBar />,
    children: [
      {
        path: "/book-Management",
        element: <Bookmanagement />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookContextProvider>
      <RouterProvider router={router} />
    </BookContextProvider>
  </React.StrictMode>
);
