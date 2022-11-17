const express=require('express');
const router=express.Router();

const mongoose =require('mongoose');
const schema =mongoose.Schema

const schemaPaciente=new schema({
    nombre:String,
    apellido:String,
    email:String,
    telefono:String,
    idPaciente:String




})
const ModeloPaciente= mongoose.model('pacientes',schemaPaciente)
module.exports=router



/*
ruta de ejemplo 
router.get('/ejemplo',(req,res)=>{
    res.end('Saludo desde carga ejemplo')

})*/
// Agregar usuario
router.post('/agregarusuarios',(req,res)=>{
  const nuevoPaciente=new ModeloPaciente({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    telefono: req.body.telefono,
    idPaciente:req.body.idPaciente

  })
  nuevoPaciente.save(function(err){

    if (!err){
        res.send('usuario agregado correctamente')
    }else {
        res.send(err)
    }

  })

})
//Obtener todos los usuarios
router.get('/obtenerpacientes',(req,res)=>{
  ModeloPaciente.find({},function(docs,err){

    if (!err){
      res.send(docs)
  }else {
      res.send(err)
  }

  })
})
//Obtener data de usuario
router.post('/obtenerdatapaciente',(req,res)=>{
  ModeloPaciente.find({idPaciente:req.body.idPaciente},function(docs,err){

    if (!err){
      res.send(docs)
  }else {
      res.send(err)
  }

  })
})
// editar usuario
router.post('/actualizarPaciente',(req,res)=>{

  ModeloPaciente.findOneAndUpdate({idPaciente:req.body.idPaciente},{
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    email:req.body.email,
    telefono:req.body.telefono

  },(err)=>{
    if (!err){
      res.send('usuario actualizado correctamente')
  }else {
      res.send(err)
  }

    

  })
})

// borrar usuario
router.post('/borrarpaciente',(req,res)=>{

  ModeloPaciente.findOneAndDelete({idPaciente:req.body.idPaciente},(err)=>{
 
    if (!err){
      res.send('usuario elimino correctamente')
  }else {
      res.send(err)
  }
    

  })
})