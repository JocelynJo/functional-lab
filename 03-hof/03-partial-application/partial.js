function sumAndMult(arr){
	const sum = arr.reduce((acc,elem) => acc + elem, 0)
	console.log(sum)
	return (factor)=> {
		return sum * factor
	}
}

const sumArr = sumAndMult([1,2,3,4,5,6])
//const sumArr = sumAndMult([1,2,3,4,5,6])(2)Curry
console.log(sumArr)


//encapsula procesos para parcializar la operacion 