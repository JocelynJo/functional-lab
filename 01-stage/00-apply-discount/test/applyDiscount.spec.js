const testDiscount =require('../applyDiscount')

test (
	'Deberia retornar un array',()=> {
		const actual = [{}]
		const discount = Math.random();

		expect(Array.isArray(testDiscount(actual,discount))).toBe(true)// expecte jest cuando se ejecuta lo va a utlizar 
})
test(
	'Debería retornar objetos con descuento',()=>{
		const actual = [{ price: 1 },{ price: 2 },{ price: 3 }];
		const discount = 0.3
		const expected = [{ price: 0.7 },{ price: 1.4},{ price: 2.0999999999999996}];	
		
		// expected y .toBe son metodos
		expect(testDiscount(actual,discount)).toEqual(expected)	
})

test(
	'No debería mutar', ()=>{
	const actual = [{ price: 1 },{ price: 2 },{ price: 3 }]
	const discount = .3
	expect(actual).toEqual([{ price: 1 },{ price: 2 },{ price: 3 }])	
	expect(testDiscount(actual,discount)).toEqual([{ price: 0.7 },{ price: 1.4},{ price:2.0999999999999996}])	
})

test(
	'Retornar el mismo largo', ()=>{
	const actual = [{}];
	const discount = Math.random() 
	expect(actual.length).toEqual(testDiscount(actual,discount).length)		
})
