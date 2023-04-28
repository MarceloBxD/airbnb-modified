import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Main, FormLogin, FormCadaster, PlaceAdd } from "../sections";

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
    ],
  },
]);
