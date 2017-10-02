//ejercicio 3

const parseItems = (items) => {
 const items_dos = items.map((x)=> { return parseInt(x, 10)}).sort()//mapea y ordena ademas de crear nuevo arreglo
 return items_dos
};

module.exports = parseItems;