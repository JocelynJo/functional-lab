//ejercicio1.js
'use strict';


//const discount = .2;

// Broken: returns new array but mutates same object references.
const applyDiscount = (cart,discount) => {
  if (!cart.length) {
    return [];
  }
  const arrOb = cart.slice(0,cart.lenght)// crea nuevo array clonado del original 
  const current = arrOb.shift();//deja el primer elemento del arra clonado
  current.price *= (1 - discount);//aplica descuento
  return [current].concat(applyDiscount(arrOb,discount));//recursion, ejecuta la funcion utilizando el nuevo objeto creado por lo tanto parte del valor 

};

module.exports = applyDiscount;




//datos para test
/*const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];

const cartWithDiscount = applyDiscount(myCart, .3);*/