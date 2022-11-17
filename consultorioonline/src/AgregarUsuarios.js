import React, { useState } from 'react';
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
function AgregarUsuarios(){
     //Hooks
     const[nombre,setNombre]=useState('')
     const[apellido,setApellido]=useState('')
     const[email,setEmail]=useState('')
     const[telefono,setTelefono]=useState('')
//estos hooks se leen en la parter inferior

    function agregarPaciente(){
        var paciente={
            nombre:nombre,
            apellido:apellido,
            email:email,
            telefono:telefono,
            idPaciente:uniquid()

        }
        console.log(paciente)

        axios.post('/api/paciente/agregarusuarios',paciente)
        .then(res=>{
            //alert(res.data)
            Swal.fire('Felicidades', 'El paciente se creo con exito.')
        })
        .then(err => {console.log(err)})
       
        





    }


    return (
        <div className='container'>
            <div className='row'>
            <h2>Agregar paciente</h2>
            
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
                <button onClick={agregarPaciente} className='btn btn-success'>Guardar Paciente</button>


            </div>
         
            
        </div>
        </div>
    )
}
export default AgregarUsuarios; 