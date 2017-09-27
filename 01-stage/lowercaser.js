//function lowercaser(input){
//	return input.toLowerCase()
//}
//recibe input y lo transforma a lowercase
const lowercaser = (input)=>{
	if(typeof input != 'string'){
		throw('input is not a valid string')
	}
	return input.toLowerCase() //en una linea function 
	//el input se transforma a string no lo transforma en una funcion pura cambia el dato que entra

}

module.exports = lowercaser //module agrega metodo al scope global 