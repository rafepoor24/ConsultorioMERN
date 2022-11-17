import axios from 'axios';
import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
function UsuarioIndividual({paciente}){

    const navegar=useNavigate()

    //Animar de scroll
    useEffect(()=>{
        AOS.init()

    },[])



    // funcion para eliminar paciente
    function borrarPaciente(idPaciente){
        axios.post('/api/paciente/borrarpaciente',{idPaciente:idPaciente}).then(res=>{
            console.log(res.data)
            Swal.fire('Felicidades', 'El paciente se elimino con exito.')
            navegar(0)
            
    
        }).catch(err=>{
            console.log(err)
        })

    }
    return (
        <div className='container'>
           <div className='row'>

<div className='col-sm-6 offset-3' data-aos="flip-right">



<ul className='list-group'>
            <li className='list-group-item'>{paciente.idPaciente}</li>
            <li className='list-group-item'>{paciente.nombre}</li>
            <li className='list-group-item'>{paciente.apellido}</li>
            <li className='list-group-item'>{paciente.email}</li>
            <li className='list-group-item'>{paciente.telefono}</li>
            </ul>
            <Link to={`/editarusuarios/${paciente.idPaciente}`}><li  className='btn btn-success'>Editar</li></Link>
            &nbsp;
            <button className='btn btn-danger' onClick={()=>{borrarPaciente(paciente.idPaciente)}}>Eliminar</button>
            <hr className='mt-4'></hr>
</div>

            
           </div>
            
        </div>
    )
}
export default UsuarioIndividual;