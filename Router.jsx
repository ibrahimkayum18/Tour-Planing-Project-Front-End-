import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./src/Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
