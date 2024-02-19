const express = require('express');
const app = express()

//Importo la conexión a PostgreSQL

//const conexionbd = require('./conexionbd')

app.get('/', (req, res) => {

    res.end('Catalogo de Sistemas de Informacion funcionando...')
})

//Configuración back 
app.listen(5000, function(){
    console.log('Conexión establecida correctamente')
})