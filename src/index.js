const express = require('express');
const app = express();

//middleware
app.use(express.json());//desde una aplicacion cliente puede convertirlo a una formato json
app.use(express.urlencoded({ extended:false}));//datos simples de formularios

//routes
app.use(require('./routes/index'))


app.listen(3001);

console.log('Server on port 3001');