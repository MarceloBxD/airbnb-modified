import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
