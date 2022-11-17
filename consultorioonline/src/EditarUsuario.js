import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
function EditarUsuario(){

const params=useParams()
 //Hooks
 const[nombre,setNombre]=useState('')
 const[apellido,setApellido]=useState('')
 const[email,setEmail]=useState('')
 const[telefono,setTelefono]=useState('')

 //para volver atras
 const navegar=useNavigate()

 useEffect(()=>{
    axios.post('/api/paciente/obtenerdatapaciente',{idPaciente:params.idPaciente}).then(res=>{
        console.log(res.data[0])
        const dataPaciente=res.data[0]
        setNombre(dataPaciente.nombre)
        setApellido(dataPaciente.apellido)
        setEmail(dataPaciente.email)
        setTelefono(dataPaciente.telefono)
       
        

    })

},[])
//funcion  que actualiza
function editarUsuario(){
    const actualizarUsuario={
        nombre:nombre,
        apellido:apellido,
        email:email,
        telefono:telefono,
        idPaciente:params.idPaciente
    }
//hacer la peticion con axios

axios.post('/api/paciente/actualizarPaciente',actualizarUsuario)
.then(res=>{
    console.log(res.data)
    //alert(res.data)
    Swal.fire('Felicidades', 'El paciente se edito con exito.')
    navegar('/')
})
.then(err => {console.log(err)})
}


    return (
        <div className='container'>
            <div className='row'>
            <h2 className='mt-4'>Editar usuario</h2>
            
        </div>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
                    <label htmlFor="nombre" className='form-label'>Nombre</label>
                    <input type="text"  className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>


                </div>
              
                <div className='mb-3'>
                    <label htmlFor="apellido" className='form-label' 
                    >Apellido</label>
                    <input type="text"  className="form-control" value={apellido}
                    onChange={(e)=>{setApellido(e.target.value)}}></input>


                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label' 
                    >Email</label>
                    <input type="email"  className="form-control" value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}></input>


                </div>
                <div className='mb-3'>
                    <label htmlFor="telefono" className='form-label' >Telefono</label>
                    <input type="email"  className="form-control" value={telefono}  onChange={(e)=>{setTelefono(e.target.value)}}></input>


                </div>
                <button onClick={editarUsuario} className='btn btn-success'>Editar Paciente</button>


            </div>
         
            
        </div>
        </div>
    )
}
export default EditarUsuario;