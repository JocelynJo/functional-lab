

//Ejercicio 2 
const serializeUser = user => {
    const userOne = Object.assign({}, user);//copia objetos...los clona
	userOne.name = (userOne.name.length > 10) ? `${userOne.name.slice(0, 7)}...` : userOne.name;
	userOne.date = userOne.date.toJSON();
	return JSON.stringify(userOne);
};

module.exports = serializeUser

//ejemplos test
/*const grace = {
    userId: 'xxx',
    name: 'Grace Hopper',
    country: 'us',
    date: new Date()
};

serializeUser(grace);
// => {"userId":"xxx","name":"Grace H...","country":"us","date":"2017-09-07T21:42:09.152Z"}*/