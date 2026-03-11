import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/page";
import Conteos from "../pages/conteos/page";
import Crossdocking from "../pages/crossdocking/page";
import Auditorias from "../pages/auditorias/page";
import AlertasPicking from "../pages/alertaspicking/page";
import DiferenciaTiendas from "../pages/diferenciatiendas/page";

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
    path: "/crossdocking",
    element: <Crossdocking />,
  },
  {
    path: "/auditorias",
    element: <Auditorias />,
  },
  {
    path: "/alertas-picking",
    element: <AlertasPicking />,
  },
  {
    path: "/diferencia-tiendas",
    element: <DiferenciaTiendas />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
