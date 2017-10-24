exports.factorial = (n) => {
    return (n === 0) ? 1 : n * exports.factorial(n-1);
}
exports.fibonacci = (n) => {
    return ( n === 1 || n === 2) ? 1 : exports.fibonacci(n-1)+exports.fibonacci(n-2)
}
exports.divide = (a, b) => {
    return (b>a) ? 0 : exports.divide(a-b, b) + 1
}

exports.invert = (n) => {
    if (n < 10) {
        return n
    } else {
        return (n%10) , exports.invert(n/10)*10;
    }

}
   

//exports.suma = (n) => (n === 0) ? n : n%10 + exports.suma(parseInt(n/10, 10))

exports.multi = (a, b) => {
    if (b === 1) {
        return (a)
    }
    if (b%2 != 0) {
        return (a + exports.multi (b/2 , a*2))
    } else {
        return (exports.multi (b/2 , a*2))
    }
}
   

exports.sumArr = (arr) => {
    return (arr.length === 0) ? 0 : arr[0] + exports.sumArr(arr.slice(1))
}