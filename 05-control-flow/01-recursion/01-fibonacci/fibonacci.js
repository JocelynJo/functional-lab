const fibonacci = n => {
	return ( n === 1 || n === 2) ? 1 : exports.fibonacci(n-1)+exports.fibonacci(n-2)
}

module.exports = fibonacci