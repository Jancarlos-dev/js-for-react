// Esto es una función normal
function saludar() {
  console.log("Hola, soy una función normal");
}
saludar();

// Esto es un objeto con claves y valores
const persona = {
  nombre: "Ana", // clave: 'nombre', valor: 'Ana'
  edad: 25, // clave: 'edad', valor: 25
};
console.log(persona.nombre); // Imprime 'Ana'

// Esto es un array, una lista ordenada
const numeros = [1, 2, 3, 4]; // Lista de números
console.log(numeros[1]); // Imprime '2', el segundo elemento

// Esto es una arrow function, una forma breve de definir una función
const sumar = (a, b) => a + b; // Suma dos valores
console.log(sumar(3, 5)); // Imprime '8'
