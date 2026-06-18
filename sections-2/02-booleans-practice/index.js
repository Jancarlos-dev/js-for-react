console.log(true || true);
console.log(false || true);
console.log(false && true);

console.log(!true);
//false

console.log(!!false);
//false

console.log(false && false);
//false

console.log(true && true);
//true

console.log(false && true);
//false

console.log(false || false);
//false

console.log(false || true);
//true

console.log(true || false);
//true

console.log(!false || (false && true));
//true

console.log(!(false || true) && false);

// En esta práctica aprendí a trabajar con operadores lógicos en JavaScript.
// El operador OR (||) devuelve true si al menos una condición es verdadera.
// El operador AND (&&) devuelve true solo cuando todas las condiciones son verdaderas.
// El operador NOT (!) invierte el valor de un booleano (true pasa a false y viceversa).
// También practiqué combinando varios operadores para entender cómo JavaScript evalúa expresiones lógicas.
