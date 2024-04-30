const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const puerto = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes)

//routes
app.get('/', (req,res)=> {
    res.send('Bienvenido a mi API');
}); 

//conexion mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado a MongoDB Atlas'))
    .catch((error)=> console.error(error));
app.listen(puerto,()=>console.log('server esperando en puerto', puerto));