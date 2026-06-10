// Lo entendí como cuando una persona recibe información para hacer una tarea.
// La función hello espera recibir un nombre.
// Cada vez que la llamo, le paso un nombre diferente y ella me devuelve un saludo personalizado.
// Es como una máquina de saludos: le doy un nombre y me devuelve "hola" junto con ese nombre.
// Gracias a los parámetros puedo reutilizar la misma función para muchas personas sin escribir código repetido.

function hello(name) {
  return "hola " + name;
}

console.log(hello("hades"));
console.log(hello("adrian"));
console.log(hello("dario"));
console.log(hello("jorge"));

// Lo entendí como una calculadora.
// La función add recibe dos números, los suma y me devuelve el resultado.
// Los parámetros x e y son los números que quiero sumar.
// Cada vez que llamo la función puedo usar números diferentes sin cambiar el código.
// Es como presionar el botón "=" de una calculadora y obtener la respuesta.

function add(x, y) {
  return x + y;
}

console.log(add(10, 20)); // 30
console.log(add(5, 15)); // 20
console.log(add(10, 15)); // 25
