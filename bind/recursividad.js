//recursividad


const applyDiscount = (cart,discount) =>{
	if(!cart.length)return []

	return [{
		price: cart[0].price * (1-discount)

	}].concat(applyDiscount(cart.slice(1),discount))


};

module.export = applyDiscount;



//ejer 2
//fn=> fn (prev, curr, index, arr) => prev + curr
function reduce (arr, fn, initial){
	return (function innerReduce(idx, value){
		if(idx > arr.length -1){
			return value
		}
		return innerReduce(idx + 1, fn(value, arr[idx], idx, arr))
	})(0, initial)
}