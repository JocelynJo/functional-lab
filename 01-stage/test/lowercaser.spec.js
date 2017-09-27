const lowercaser =require('../lowercaser')

test (
	'lowercaser deberia retornar un string en lowercase',()=> {
		const actual = 'LOREM IPSUM'
		const expected = 'lorem ipsum'

		expect(lowercaser(actual)).toBe(expected)// expecte jest cuando se ejecuta lo va a utlizar 
})

test(
	 'Deberia fallar cuando se ingresa un numero',
	() => {
		const actual = 1

		expect(() => {
				lowercaser(actual)
		}).toThrow()
		//const expected = '1'
		//expected(lowercaser(actual)).toBe(expected)
	}

)