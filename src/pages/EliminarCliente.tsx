import { eliminarCliente } from "../api/cliente";
import { useNavigate, redirect } from "react-router-dom";

export async function action({ params }) {console.log('Hopa desde eliminar');
    eliminarCliente(params.clienteId);
    return redirect("/");
}