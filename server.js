const app = require ('./app')
require ('dotenv').config ()

//Servidor
const port = process.env.PORT || 3000

app.listen (port, () => {
    console.log (`Server in port ${port}`)
})