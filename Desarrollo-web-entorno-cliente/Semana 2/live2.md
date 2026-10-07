```js
console.log(sumar(2,3)) //argumentos son los valores que das a los parámetros y los parámetros en los paréntesis

function sumar(a, b) {
    return a + b;
};

/*
console.log(restar(1,1)) da error
const restar = function (a, b) {
    return a - b;
}
*/

const duplicar = (n) => { // Primera opción
    return n * 2;
};

const duplicar2 = (n) => n * 2; // Segunda opción

// Problemas con las funciones flecha cuando son objetos: si no pones paréntesis lo interpreta como bloque

const crearUsuario = (nombre) => ({nombre, rol: "alumno"});
console.log(crearUsuario("Ana"));

// Parámetros por defecto

function enviarCorreo(destinatario, asunto = "Sin asunto", prioridad = "Normal"){
    console.log(`Enviando a ${destinatario} | Asunto: ${asunto} | Prioridad: ${prioridad}`)
}; 
enviarCorreo("alumno@daw.es") // Toma los dos valores por defecto
enviarCorreo("jefe@daw.es", "Reunión", "Urgente");

// Rest parameters y operador spread
/*
“Esta función puede recibir cualquier cantidad de argumentos, y los voy a guardar todos dentro de un array llamado numeros”.
*/
function sumarTodos(...numeros){
    // numeros se convierte  automáticamente en un Array con todos los argumentos
    let total = 0;
    for (const n of numeros) {
        total += n;
    }
    return total;
}
console.log(sumarTodos(2,4)); // 6
console.log(sumarTodos(10,20,30,40)); // 100


// Callbacks(?)
function mostrarConsola(mensaje) {
    console.log (`[LOG]: ${mensaje}`);
}
function mostrarAlerta(mensaje){
    console.log(`ALERTA: ${mensaje.toUpperCase()}`);
}
//accionFinal es nuestro callback
function procesarUsuario(nombre, accionFinal) {
    const saludo = `Bienvenido, ${nombre}`;
    accionFinal(saludo); // Invocamos la función que nos pasaron
}
// Pasamos la función SIN paréntesis:
procesarUsuario("Ana", mostrarConsola); // [LOG]: Bienvenido, Ana
procesarUsuario("Carlos", mostrarAlerta); // ALERTA: BIENVENIDO, CARLOS

// Callback2 - Funcion que se envia a otra función
function realizarOperacion(a, b, operacionFn){
    return operacionFn(a,b);
}
//Le pasamos funciones flecha sobre la marcha y esta es ano nima
console.log(realizarOperacion(10,5, (x,y) => x + y)); // 15 (suma)
console.log(realizarOperacion(10,5, (x,y) => x * y)); // 50 (Multiplicacion)
console.log(realizarOperacion(10,5, (x,y) => x / y)); // 2 (Division)
```
