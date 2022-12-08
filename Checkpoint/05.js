// 5️⃣ ***** EJERCICIO 5 ***** - cobrarClientes 5️⃣

const { Queue } = require("../DS");

// Implementar la función cobrarClientes, que recibirá una
// Queue (fila) de clientes que esperan para realizar el pago
// de sus compras del supermercado.
//
// Cada cliente dentro de la fila estará como objeto, y tendrá
// la siguiente estructura:
//
// {
//   nombre: "Jorge",
//   dinero: 1500,
//   precioProductos: 1200
// }
//
// - nombre: Nombre del cliente
// - dinero: Dinero disponible que tiene el cliente
// - precioProductos: Suma de los productos que desea comprar
//
// La función debe evaluar si el primer cliente de la fila poseee dinero suficiente
// para abonar los productos que desea comprar. En caso de ser así, debe remover
// al cliente de la fila.
// En caso de presentarse un cliente que no posee dinero suficiente, debe dejar de
// evaluar los clientes de la fila, y retornar un array con los NOMBRES de los clientes
// que fueron correctamente retirados de la fila.
//
// EJEMPLO:
//
// clientes=[
//  {
//   nombre: "Jorge",
//   dinero: 1500,
//   precioProductos: 1200
//  },
//  {
//   nombre: "Mateo",
//   dinero: 2000,
//   precioProductos: 1900
//  },
//  {
//   nombre: "Mora",
//   dinero: 5000,
//   precioProductos: 5500
//  },
//]
//
// cobrarClientes(clientes) => ["Jorge","Mateo"]
//
// ⚠️ ATENCIÓN ⚠️
// Recuerden que los "clientes" recibidos por parámetro se encuentran
// en una Queue! Por lo cual tendremos que utilizar los métodos que
// tenemos implementados para esta clase.
//
// CONSIGNAS:
//  🟢 Cuando termine de evaluar clientes, la función debe retornar un array con los nombres de los clientes que
//    han abonado correctamente.
//  🟢 En caso de quedarse sin clientes en la fila, la función debe retornar false.

// 1.- Qué nos llega? Una Queue de clientes que esperan para realizar sus compras.
//     Cada cliente aparece como un objeto con propiedades de nombre, dinero que lleva y 
//     total del valor de la compra que quiere realizar.
// 2.- Qué se debe hacer? Evaluar si el primer cliente posee el dinero suficiente y 
//     si es así removerlo de la fila. Si el cliente no tiene el dinero suficiente
//     se debe dejar de evaluar y devolver un arreglo con los nombres de los clientes
//     corréctamente retirados de la fila. Si se queda sin clientes sin haber sacado ninguno
//     devolver falso.
// 3.- Cómo proceder?

function cobrarClientes(clientes) {
  // Tu código aquí:

  const sacados = new Queue();                    // Crear un nuevo Queue que tendrá los clientes retirados

  for (let i=0;i<clientes.size();i++){            // Recorre el Queue de clientes y mientras existan objetos que identifican
                                                  // a los clientes va analizando esos objetos
  while (clientes.size() > 0){
    if (clientes.array[i].dinero >= clientes.array[i].precioProductos){  // Si el dinero que tiene el cliente es suficiente para el pago
      sacados.enqueue(clientes.array[i].nombre)                    // de los productos que quiere comprar y añadirlos al nuevo
    } else {                                                 // Queue. Terminar de incluir cuando hay un cliente que no tenga
      return sacados['array'];                                        // el dinero suficiente y devolver el nuevo Queue.
    }
    clientes.dequeue();
  }
  return false;                                             // Si ha vaciado el Queue de clientes sin haber existido 
                                                            // clientes retirados devolver falso
  }
                                                 
 
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  cobrarClientes
};