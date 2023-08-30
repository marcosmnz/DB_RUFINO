require('dotenv').config()
const express = require('express')
const clientsRoutes = require('./routes/clientsRoutes')
const productsRoutes = require('./routes/productsRoutes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Rutas */
app.use('/api/v1', clientsRoutes)
app.use('/api/v1', productsRoutes)

app.listen(3000, () => {
  console.log('Servidor encendido en el puerto 3000')
})
