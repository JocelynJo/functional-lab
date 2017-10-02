//ejemplos test
/*const grace = {
    userId: 'xxx',
    name: 'Grace Hopper',
    country: 'us',
    date: new Date()
};

serializeUser(grace);
// => {"userId":"xxx","name":"Grace H...","country":"us","date":"2017-09-07T21:42:09.152Z"}*/


const serializeUsers = require('../serializeUser')

test (
	'No debería mutar el objeto que recibe como argumento',() =>{
		const actual = {userId:'xxx',name:'Grace Hopper',country:'us',date: new Date()}
		expect(actual).toEqual({userId:'xxx',name:'Grace Hopper',country:'us',date: new Date()})
})

