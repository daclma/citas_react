import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({setPacientes, pacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);
    
    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setNombrePropietario(paciente.nombrePropietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if ([nombre, nombrePropietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        //Objecto paciente
        const objetoPaciente = {nombre, 
            nombrePropietario, 
            email, 
            fecha, 
            sintomas
        }

        //Mira si estamos editando un paciente (objeto paciente propiedad id no esta vacia)
        if(paciente.id){
            //Estamos editando un paciente
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map( pacienteIndex => 
                pacienteIndex.id === paciente.id ? objetoPaciente : pacienteIndex)
            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            //Estamos creando un nuevo paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Reiniciar State
        setNombre('')
        setNombrePropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-2">Añade Pacientes y {''}
                <span className="text-indigo-500 font-bold">Administralos</span>
            </p>
            <form 
            className="bg-gray-370 shadow-md rounded-lg py-3 px-3"
            onSubmit={handleSubmit}>
                {error && (
                    <Error>Todos los campos son obligatorios</Error>
                )} 
                <div className="mb-3">
                    <label htmlFor="mascota" className="block text-gray-800 font-bold">
                        Nombre mascota:{''}
                    </label>
                    <input 
                        id="mascota"
                        className="border-2 w-full mt-1 placeholder-gray-600 rounded-md" 
                        type="text" 
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="propietario" className="block text-gray-800 font-bold">
                        Nombre propietario:{''}
                    </label>
                    <input 
                        id="propietario"
                        className="border-2 w-full mt-1 placeholder-gray-600 rounded-md" 
                        type="text" 
                        placeholder="Nombre del propietario"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mail" className="block text-gray-800 font-bold">
                        Email:{''}
                    </label>
                    <input 
                        id="mail"
                        className="border-2 w-full mt-1 placeholder-gray-600 rounded-md" 
                        type="text" 
                        placeholder="Email de contacto del propietario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="alta" className="block text-gray-800 font-bold">
                        Fecha de alta:{''}
                    </label>
                    <input 
                        id="alta"
                        className="border-2 w-full mt-1 placeholder-gray-600 rounded-md" 
                        type="date" 
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sintomas" className="block text-gray-800 font-bold">
                        Sintomas:{''}
                    </label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full mt-1 placeholder-gray-600 rounded-md" 
                        type="textarea" 
                        placeholder="Describa los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-300 w-full rounded-md font-bold hover:bg-indigo-400 cursor-pointer transition-colors"
                    value={paciente.id ? 'Editar Paciente' : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario;