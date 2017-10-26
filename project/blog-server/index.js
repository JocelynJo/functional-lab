//archivo con dato (base datos)
const data = require('./data.json')
//dependencias del web service
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')//acepte llamadas desde nuestra ip


//nuestra App (web Service)
const app = express()//funcion
//permite usar otras dependencias
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//definicion de puerto
const port = process.env.PORT || 8080
const router = express.Router()//sublibreria dentro de express definir rutas dentro de un web service
// req todo lo que viene del exterior res todo lo que le voy a enviar 
router.get('/posts', (req, res) => {
	res.json(data)
    //devuelve todos los post
})

router.get('/posts/:id', (req, res) => {
   //devolvemo todos los post

    const { id } =req.params
    // data necesitamos sacar el objeto que coincida con el id
    // que haga match su id con el dado en la url
    //console.log(typeof id)
    const post = data.filter((p)=>{//filter high order function comparar id post con el de la url
    	return p.id === parseInt(id, 10)//id viene en string 
    })[0]
    if(typeof post === 'undefined'){
    	res.status(404).json({})
    	return
    }

     res.json(post)//retorna en formato json 
     //se devuelve solo un post filtrado
 })

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)

