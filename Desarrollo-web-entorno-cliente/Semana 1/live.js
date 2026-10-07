```js
// "use strict" Te da el error que has cometido

let a = "hello Roberto"
a[0] = "H"
console.log(a)

a = "H" + a.slice(1)
console.log(a)

let usuarioLogeado = null;
console.log(usuarioLogeado)
console.log(typeof null)

let user1 = {nombre: "Carlos"}
let user2 = {nombre: "Carlos"}
console.log(user1===user2)

let b = 10
let c = b
b = 99
console.log(c)

let lista1 = [1,2,3]
let lista2 = lista1
lista2.push(99)
console.log(lista1)

let carrito = ["Manzanas", "Peras"]
carrito = ["Pizza"]
console.log(carrito)

//------------------------

// Ejercicio 1
/* Crea una variable vidas y asigna el valor 3, crea otra variable vidasBackup y haz vidasBackup = vidas Resta
una vida a vidas. Muestra ambas por consola para comprobar que valores tienen */

let vidas = 3
let vidasBackup = vidas
vidas--

console.log(vidas)
console.log(vidasBackup)

// Ejercicio 2
/* Crea un array tareas y asignales los valores comprar y estudiar. Crea otro array tareasUrgentes y añade a tareas urgentes la tarea examen
usando el método visto en clase. Muestra por consola el contenido de ambos arrays*/

let tareas = ["comprar", "estudiar"]
let tareasUrgentes = []
tareasUrgentes.push("examen")

console.log(tareas)
console.log(tareasUrgentes)


//--------------

console.log("5" + 2) // 52
console.log("5" - 2) // 3
console.log("5" * "2") // 10


const edad = 20

// Metodo 1: La función String()
const texto1 = String(edad)

// Metodo 2: Template Literals
const texto2 = `${edad}`

// Metodo 3: .toString()
const texto3 = edad.toString()

const variable = "Hola Luis"
const variable2 = `${variable}` + " amigo"
console.log(variable2)
```
