import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import FormLogin from "./sections/FormLogin";
import FormCadaster from "./sections/FormCadaster";
import Main from "./sections/Main";
import { AppProvider } from "./contexts/contextApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <FormLogin />,
      },
      {
        path: "/cadaster",
        element: <FormCadaster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
