//with bind

exports.log =(...args)=> args..join('');
exports.loggger = (namespace) => exports.log.bind(null,namespaces); //No sobreescribe, lo que esta despues del null pasa como argumento a la siguiente funcion 

//without bind

const logger =null;
module.exports = logger;

function logger(namespaces){
	return function (...args){
		return `${namespace} ${args.join('')}` //interpolacion de string
	}
}

const info



//////

const logger = (namespace)=> ...args => `${namespace} ${args.join('')}`;
module.exports =logger;


//curry 


