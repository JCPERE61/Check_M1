// 4️⃣ ***** EJERCICIO 4 ***** - devuelveMayores() 4️⃣

// Implementar la función devuelveMayores, que recibe por parámetro una LinkedList con precios
// de productos de una determinada góndola de Henry Market, y un precio máximo a evaluar.
// La función deberá recorrer la LinkedList recibida y retornar la CANTIDAD DE PRECIOS QUE SUPEREN
// el valor de precio máximo que se desea evaluar.
// En caso de que ningún precio supere dicho valor, debe retornar en string "Sin precios"

//  EJEMPLOS:
//
//  listaPrecios1 = 5 => 10 => 8 => 7 => 14 => 20
//  devuelveMayores(listaPrecios1, 10) => 2
//  (2 precios (14 y 20) superan el valor a evaluar (10))
//
//  listaPrecios2 = 99 => 100 => 81 => 74 => 14 => 22
//  devuelveMayores(listaPrecios2, 50) => 4
//  (4 precios (99, 100, 81 y 74) superan el valor a evaluar (50))
//
//  listaPrecios3 = 99 => 80 => 81 => 75 => 15 => 21
//  devuelveMayores(listaPrecios3, 100) => "Sin precios"
//  (Ningún precio de la lista supera el valor a evaluar (100))
//
//  REQUISITOS:
//    🟢 La función debe retornar un valor numérico, que representa la CANTIDAD DE PRECIOS que superen
//      el valor a evaluar.
//    🟢 En caso de que ningún precio supere dicho valor, debe retornar el string "Sin precios"
//
//  ATENCIÓN! Las respuestas en strings son case sensitive!

// 1.- Qué nos llega? Una lista enlazada con precios de productos 
// 2.- Qué se debe hacer? Recorrer la lista y devolver la cantidad de precios
//     que superen el valor del precio maximo que se quiere evaluar. Si ningún precio
//     supera el valor se debe devolver "Sin precios
// 3.- Cómo proceder?

function devuelveMayores(lista, valor) {
  // Tu código aquí:

  var current = lista.head;
  var cuenta = 0;

  while (current !== null){               // Se recorre la lista empezando por el "head"
    if(current.value > valor) {           // y se añaden os productos cuyo valor es
                                          // superior al pasado en la función
      cuenta = cuenta +1;
    }
    current = current.next;
  }
  if (cuenta === 0) return "Sin precios"; // Si ninguno es mayor se devuelve "Sin precios"

  return cuenta;                          // Sino se devuelve la información de cuantos
                                          // han superado el precio

}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  devuelveMayores
};