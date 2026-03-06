import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/page";
import Conteos from "../pages/conteos/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/conteos",
    element: <Conteos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;