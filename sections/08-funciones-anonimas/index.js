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

// Aquí practiqué una función anónima dentro de addEventListener().
//
// 1. Creé un botón.
// 2. Le agregué un texto.
// 3. Le agregué un evento click.
// 4. La función anónima se ejecuta cuando hago click.
// 5. Muestra un alert en pantalla.
// 6. Finalmente agregué el botón al body.

const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", function () {
  alert("Hiciste click");
});

document.body.appendChild(button);

// Aquí practiqué una IIFE anónima.
//
// La función no tiene nombre y se ejecuta inmediatamente.
// No necesito llamarla después porque termina con })().
//
// Para acordarme:
// Si veo })() al final, la función corre de una vez.

(function () {
  console.log("Me ejecuté de una vez");
})();
