import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
function ListaUsuarios(){

    const[dataPacientes,setdataUsuario]=useState([])
    useEffect(()=>{
        axios.get('/api/paciente/obtenerpacientes').then(res=>{
            console.log(res.data)
            setdataUsuario(res.data)
            

        }).catch(err=>{
            console.log(err)
        })

    },[])
//mapear lista de pacientes en objeto paciente
const listaPacientes=dataPacientes.map(paciente => {
    return(
        <div>
             <UsuarioIndividual paciente={paciente}/>


        </div>


    )

});

    return (
        <div>
            <h2>Lista de pacientes</h2>
            {listaPacientes}
        </div>
    );
};
export default ListaUsuarios;
