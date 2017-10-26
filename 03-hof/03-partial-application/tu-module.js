const log = (...args)=> this.namespace + ' ' + args.join(' ');
//exporta un objeto
const logger = (namespace)=> {
	let message = namespace
	return log
}


module.exports = {
	log,
	logger,
}