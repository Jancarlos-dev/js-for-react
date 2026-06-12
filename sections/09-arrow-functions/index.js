// Arrow Function sin parámetros.
//
// Retorna el nombre de un usuario y lo muestra en consola.

const usuario = () => {
  return "Hades";
};

console.log(usuario());

// Arrow Function con parámetros.
//
// Recibe una edad y retorna cuántos años tendrá en 10 años.

const edadFutura = (edad) => {
  return edad + 10;
};

console.log(edadFutura(25));

// Arrow Function en forma corta.
//
// Recibe un nombre y retorna un mensaje personalizado.

const bienvenida = (nombre) => `Bienvenido ${nombre}`;

console.log(bienvenida("Jean Carlos"));
