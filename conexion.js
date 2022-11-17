const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/consultorio')
const objetodb=mongoose.connection

objetodb.on('connected',()=>{console.log('conexion correcta a mongo db')})
objetodb.on('error',()=>{console.log('conexion erronea a mongo db')})


module.exports=mongoose