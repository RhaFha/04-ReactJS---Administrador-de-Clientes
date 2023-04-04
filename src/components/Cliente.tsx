import { useNavigate, redirect, Form } from "react-router-dom";
import { ClienteType } from "../pages";

const Cliente: React.FC<IPropsCliente> = ({ cliente }) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b">
      <td className="pd-6 space-y px-3">
        <p className="text-2xl text-gray-800">{cliente.nombre}</p>
        <p className="">{cliente.empresa}</p>
      </td>
      <td className="p-6 px-3">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {cliente.email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {cliente.telefono}
        </p>
      </td>
      <td className="p-6 flex gap-2 px-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${cliente.id}/editar`)}
        >
          Editar
        </button>
        <Form
          method="POST"
          action='destroy'
          onSubmit={(e) => {
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Cliente;

interface IPropsCliente {
  cliente: ClienteType;
}
