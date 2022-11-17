const express =require('express');
const app =express();
// importar conexio mongo db
const baseConsultorio=require('./conexion');

// importacion del archivo de rutas y modelos pacientes

const rutasPacientes=require('./rutas/paciente')

// importar body-parse
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/paciente',rutasPacientes)

app.get('/',(req,res)=>{

res.end('Bienvenidos al servidos Backend Node.js')

} )

//configuarcion de server

app.listen(5000,function(){
    console.log('El servidor que chevere esta corriendo correctamente')
})
