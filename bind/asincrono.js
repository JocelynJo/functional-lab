const request = require ('request')//emulan comportamiento de fetch
function lala(){
	request('https://www.google.com', function (err, res){
		if(err){
			console.log (err)
			return
		}
		console.log(res)
	})
}

function lala(){
	return new Promise((resolve, reject)=>{// respuesta exitosa_ respuesta fallida
		request('https://www.google.com', function (err, res){
		if(err){
			return reject (err)
		}
		resolve(res)
	})
	
	})
}
execLoading(true)
lala()//retorna una promesa 

.then((response)=>{
	console.log(response)
	execLoading(false)
	return response
})
.catch(err => {
	console.log(err)
})