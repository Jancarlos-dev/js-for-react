// Las 2 hacen lo mismo.
//
// En la primera creo la función y después la llamo.
// En la segunda la función se ejecuta de una vez dentro del console.log.
//
// Para acordarme:
// Si veo })() al final, significa que la función se ejecuta inmediatamente.

// Función normal
function start() {
  return "starting...";
}

console.log(start());

// IIFE
console.log(
  (function start() {
    return "starting...";
  })(),
);

// Aquí practiqué una función anónima guardada en una variable.
//
// La función retorna el texto "Hola".
// Luego la ejecuto con saludo() y muestro el resultado en consola.

const saludo = function () {
  return "Hola";
};

console.log(saludo());

// Aquí practiqué una función anónima que recibe parámetros.
//
// Recibe dos números (a y b), los suma y retorna el resultado.
// Luego ejecuto la función pasando los valores 5 y 3.

const sumar = function (a, b) {
  return a + b;
};

console.log(sumar(5, 3));
