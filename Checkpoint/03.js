const { Stack } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 3️⃣ ***** EJERCICIO 3 ***** - apilarCajas() 3️⃣
// Se debe implementar la función apilarCajas, la cual ayudará a los encargados de depósito de
// Henry Market a armar pilas de cajas de productos de forma tal que no supere el peso máximo permitido
// y evitar así que se dañen los productos.
// La función recibirá un array que representará las cajas que se desean apilar, con el nombre del producto
// y el peso total de cada caja, y deberá crear y retornar un STACK con LOS NOMBRES de productos que vaya apilando,
// sin superar el peso máximo permitido.
// En caso de que los productos superen dicho peso máximo, deberá retornar el string "No se puede crear la pila"
// Si el array recibido no contiene cajas, debe retornar el string "Error".

// El array recibido tendrá, por ejemplo, la siguiente forma:
//
// [
//  {nombre: arroz, peso: 10},
//  {nombre: fideos, peso: 15},
//  {nombre: cafe, peso: 5},
//  {nombre: arroz, peso: 10},
//  {nombre: azucar, peso: 20}
// ]
//
// TIPs:
//  - El array recibido es una ARRAY DE OBJETOS
//  - El array puede contener productos repetidos
//
//                     ********* El peso máximo permitido para cada STACK es de 50 kg! ***********
//
// EJEMPLOS:
//  - apilarCajas( [{nombre: arroz, peso: 10},
//                  {nombre: fideos, peso: 15},
//                  {nombre: cafe, peso: 5}] ) => Stack [arroz, fideos, cafe]
//                  * El peso total (30), no supera el máximo (50)
//
//  - apilarCajas( [{nombre: leche, peso: 30},
//                  {nombre: fideos, peso: 15},
//                  {nombre: cafe, peso: 5}] ) => Stack [leche, fideos, cafe]
//                  * El peso total (50), no supera el máximo (50)
//
//  - apilarCajas( [{nombre: leche, peso: 30},
//                  {nombre: fideos, peso: 15},
//                  {nombre: fideos, peso: 15},
//                  {nombre: cafe, peso: 5}] ) => "No se puede crear la pila"
//                  * El peso total (65), excede el peso máximo permitido (50)
//
//  - apilarCajas( [] ) => "Error"
//
// REQUISITOS:
//  🟢 La función debe crear y retornar el Stack creado con las cajas de productos recibidas en el array
//  🟢 El Stack que retorna debe ser una instancia de la clase Stack
//  🟢 En caso de exceder el peso máximo permitido, debe retornar en string "No se puede crear la pila"
//  🟢 En caso de recibir un array vacío, debe retornar el string "Error"
//
// ATENCIÓN! Las respuestas en strings son case sensitive!
//
// 1.- Qué nos llega? Un arreglo que representa las cajas que se desean apilar con
//     el nombre del producto y el peso total de cada caja.
// 2.- Qué se debe hacer? Retornar un stack con los nombres de los productos que se 
//     vayan apilando sin superar el peso máximo permitido. En caso que superen debe
//     devolver "No se puede crear la pila" y para un arreglo vacio devolver "Error"
// 3.- Cómo proceder?


function apilarCajas(arr) {
  // Tu código aquí

  if(arr.length === 0) return "Error";    // Para un arreglo vacio se devuelve "Error"
  var cajas = new Stack();                // Si no se crea una instancia de Stack para colocar listado de productos

  let pesototal = 0;                      // Inicializar el total del peso
  for (i=0; i<arr.length;i++){            // Recorrer el arreglo, adicionandop el peso del producto indicado
    pesototal = pesototal + arr[i].peso;
    cajas.push(arr[i].nombre);            // Ingresar al stack el producto indicado
  }
  if (pesototal > 50) {                   // Si al finalizar el peso total excede 50kg
    return "No se puede crear la pila";   // Devolver "No se puede crear la pila"
  } else {                                // Sino devolver la pila (Stack) creada
    return cajas
  }

  

}
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    apilarCajas
};