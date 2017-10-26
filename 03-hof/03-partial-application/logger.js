const { logger } = require('./tu-modulo');

const info = logger('INFO:')
const warm = logger('WARN:')
// => 'INFO: this is an info message'



// => 'WARN: this is a warning message with more info'
function callApi (response, error){
	if(!error){
		warm('algo')
	}
	const val = info('respuesta recibida')
	info('respuesta recibida')
	console.log(response)
}
callApi('ffgfhg',null)