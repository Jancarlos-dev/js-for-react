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
