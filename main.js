/* Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

👉 Crear una función que acepte ese array como parámetro. 

Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)." */

//Declaro ingredientes
let ingredientesPizza = ["tomate", "aceite", "harina", "aceitunas", "cebolla", "queso", "jamon", "oregano", "sal", "morron"]


//Forma de resolver 1
//Tradicional
let pares = []
let impares = []

function esPar(array) {
    for (let i = 0; i < array.length; i++) {
        if ((array[i].length % 2) == 0) {
            pares.push(array[i])
        }
        else {
            impares.push(array[i])
        }
    }
}
esPar(ingredientesPizza);
console.log(pares);
console.log(impares);

//Forma de resolver 2 - Arrows - for of
/* let pares = []
let impares = []

let esPar = (array) => {
    for (e of array) {
        ((e.length % 2) == 0)
            ? pares.push(e)
            : impares.push(e)
    }
}
esPar(ingredientesPizza);
console.log(pares);
console.log(impares); */

//Forma de resolver 3  .filter
/* let pares=ingredientesPizza.filter(e=>e.length%2 ==0)
let impares=ingredientesPizza.filter(e=>e.length%2 !==0)

console.log(pares);
console.log(impares); */

