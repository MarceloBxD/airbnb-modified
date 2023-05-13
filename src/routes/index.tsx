import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Main, FormLogin, FormCadaster, PlaceAdd } from "../sections";
import { Help } from "../pages";

export const router = createBrowserRouter([
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
      {
        path: "/place-add",
        element: <PlaceAdd />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);
