import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ModalAchi from "./components/ModalAchi";
import ModalStats from "./components/ModalStats";
import Game from "./routes/Game";
import ModalLogin from "./components/ModalLogin";
import ModalRegister from "./components/ModalRegister";


const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Game />,
        children: [
          {
            path: "/achievements",
            element: <ModalAchi />,
          },
          {
            path: "/statistics",
            element: <ModalStats />,
          },
          {
            path: "/login",
            element: <ModalLogin />,
          },
          {
            path: "/register",
            element: <ModalRegister />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
