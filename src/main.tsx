import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

import Index, { loader as loaderIndex } from "./pages";
import NuevoCliente, {
  action as actionNuevoCliente,
} from "./pages/NuevoCliente";
import ErrorPage from "./components/ErrorPage";
import EditarCliente, {
  loader as loaderEditarCliente,
  action as actionEditarCliente,
} from "./pages/EditarCliente";
import { action as actionEliminarCliente } from "./components/Cliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderIndex,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: actionNuevoCliente,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: loaderEditarCliente,
        errorElement: <ErrorPage />,
        action: actionEditarCliente,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: actionEliminarCliente,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
