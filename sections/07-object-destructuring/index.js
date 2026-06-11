const user = {
  name: "hades",
  age: 30,
};

function printUserInfo(user) {
  return "<h> hola " + user.name + "</h>";
}
console.log(printUserInfo(user));

document.body.innerHTML = printUserInfo(user);
// Creé un objeto llamado user con información de una persona.
//
// Después creé una función que recibe un objeto como parámetro.
// Dentro de la función accedí a la propiedad name del objeto
// para crear un mensaje de saludo.
//
// Cuando llamo la función y le paso el objeto user,
// la función devuelve: "hola hades".
//
// También aprendí que puedo mostrar el resultado en la consola
// con console.log() y en la página web con innerHTML.
//
// Lo más importante:
// Una función puede recibir un objeto completo y usar
// sus propiedades para trabajar con la información.
