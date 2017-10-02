const parseItemsTest = require('../parseItems')
test(
	'Retornar Arreglo ordenado', () => {
		const actual = ['8','99', '5', '6']
		expect(parseItemsTest(actual)).toEqual([5,6,8,99])
	}
)


test(
	'No deberia mutar array', ()=>{
	const actual = ['8','99', '5', '6']
	expect(parseItemsTest(actual)).toEqual([ 5,6,8,99])
	expect(actual).toEqual(['8','99','5','6'])
	}
)
//Aqui failed :( 
test(
 'solo numeros',()=>{
 	const actual = ['a','b','2','5','7']
 	expect(parseItemsTest(actual)).toEqual([2,5,7])
 }
)
