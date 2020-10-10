const express = require('express')
const app = express()
const Axios = require('axios')



app.set('port', process.env.PORT || 5000)


app.listen(app.get('port'), () => {
    console.log('servidor escuchando por el puerto ', app.get('port'))
    setInterval(async () => {
        await Axios.get('https://chain-scalloped-brain.glitch.me/list')
        console.log('peticion hecha al backend de imagenes')
        await Axios.get('https://jhoan12-backend-portafolio-1.glitch.me/usuario/usuarios')
        console.log('peticion hecha al portafolio')
    }, 3000);
})