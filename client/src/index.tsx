import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Board } from "./pages/Board";
import { AddPlayer } from "./pages/AddPlayer/AddPlayer";
import { Login } from "./pages/SignForm/SignForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "addPlayer",
        element: <AddPlayer />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
