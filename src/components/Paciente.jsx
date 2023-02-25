const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el paciente ' + paciente.nombre + "?");
        if(respuesta){
            eliminarPaciente(paciente.id);
        }
    }
  return (
    <div className="m-3 bg-white shadow-md p-5 rounded-lg">
        <p className="font-bold mb-3 text-gray-700">Nombre: {''}
            <span className="font-normal">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">Propietario: {''}
            <span className="font-normal">{paciente.nombrePropietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">Email: {''}
            <span className="font-normal">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">Fecha de alta: {''}
            <span className="font-normal">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">Sintomas: {''}
            <span className="font-normal">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between">
            <button 
                type="button"
                className="py-1 px-6 bg-green-300 hover:bg-green-400 rounded-md font-bold cursor-pointer transition-colors mr-2 uppercase"
                onClick ={() => setPaciente(paciente)}
            >
                Editar</button>

            <button 
            type="button"
            className="py-1 px-6 bg-red-400 hover:bg-red-500 rounded-md font-bold cursor-pointer transition-colors mr-2 uppercase"
            onClick={handleEliminar}>
                Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
