import { useLoaderData } from "react-router-dom";

import { obtenerClinetes } from "../api/cliente";

import Cliente from "../components/Cliente";
import Header from "../components/Header";

export function loader() {
  const clientes = obtenerClinetes();
  return clientes;
}

const Index = () => {
  const clientes: ClienteType[] = useLoaderData();

  return (
    <>
      <Header titulo="Clientes" subtitulo="Administra tus clinetes" />

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aun</p>
      )}
    </>
  );
};

export default Index;

export type ClienteType = {
  id: number;
  nombre: string;
  telefono: number;
  email: string;
  empresa: string;
  notas: string;
};
