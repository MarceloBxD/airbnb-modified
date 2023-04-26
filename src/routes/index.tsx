import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../sections/Main";
import FormLogin from "../sections/FormLogin";
import FormCadaster from "../sections/FormCadaster";
import PlaceAdd from "../sections/PlaceAdd";

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
