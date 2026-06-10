function hello() {
  console.log("Hello, world!");
  console.log("trabajando con js");
}

hello();
hello();
hello();

// Lo entendí como una tarea que puedo repetir sin escribir el mismo código varias veces.
// Dentro de la función puse dos mensajes para que se ejecuten juntos.
// Cada vez que llamo hello(), se muestran los dos mensajes en la consola.
// Como llamé la función 3 veces, los mensajes se imprimieron 3 veces.
// Esto me ayuda a reutilizar código y evitar repetir instrucciones.

function hello() {
  return "Hello, world!";
}

const result = hello();
console.log(result);
hello();

// Lo entendí como una máquina.
// Cada vez que llamo la función hello(), ella me entrega un mensaje.
// Con return la función me devuelve el resultado para que pueda usarlo donde quiera.
// Guardé ese resultado en la variable result y luego lo mostré en consola.
// Si llamo hello() sola, la función devuelve el mensaje
