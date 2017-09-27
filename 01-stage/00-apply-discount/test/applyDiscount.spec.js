const testDiscount =require('../applyDiscount')

test (
	'Deberia retornar un array',()=> {
		const actual = [{}]
		const descuento = Math.random();

		expect(Array.isArray(testDiscount(actual,descuento))).toBe(true)// expecte jest cuando se ejecuta lo va a utlizar 
})
