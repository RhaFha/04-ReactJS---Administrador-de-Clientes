import Cliente from "../components/Cliente";

export async function obtenerClinetes() {
  //try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();
    return resultado;
  // } catch (error) {
  //   console.error("Ha ocurrido un error:", error);
  //   return error;
  // }
}

export async function agregarCliente(cliente){
    try{
      const respuesta = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers:{
          'Content-Type': 'application/json'
        }
        
      });
      console.log(await respuesta.json())

    }catch(error){
      console.log(error)
    }
}

export async function obtenerClinete(id) {
  //try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL + `/${id}`);
    const resultado = await respuesta.json();
    return resultado;
  // } catch (error) {
  //   console.error("Ha ocurrido un error:", error);
  //   return error;
  // }
}

export async function actualizarCliente(id, cliente) {
  //try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL + `/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });
    const resultado = await respuesta.json();
    return resultado;
  // } catch (error) {
  //   console.error("Ha ocurrido un error:", error);
  //   return error;
  // }
}

export async function eliminarCliente(id) {
  //try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL + `/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const resultado = await respuesta.json();
    return resultado;
  // } catch (error) {
  //   console.error("Ha ocurrido un error:", error);
  //   return error;
  // }
}
