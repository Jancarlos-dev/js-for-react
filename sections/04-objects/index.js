// Lo entendí como una ficha completa de una persona.
// En un objeto puedo guardar diferentes tipos de información en un solo lugar.
// Puedo guardar texto, números, listas, otros objetos e incluso funciones.
// address es otro objeto dentro del objeto principal.
// friends es una lista de amigos.
// sendmail es una función que pertenece al usuario.
// Los objetos me ayudan a organizar información relacionada como si fuera un perfil de una aplicación.

const user = {
  name: "hades",
  lastname: "garcia",
  age: 30,
  anddress: {
    contry: "republica dominicana",
    city: "santo domingo",
    street: "calle 123",
  },
  friends: ["juan", "pedro", "maria"],
  active: true,
  sendmail: function () {
    return "sending email...";
  },
};

console.log(user);
// Para acceder a una propiedad de un objeto uso el punto (.)
// Ejemplo: user.name

// Si la propiedad está dentro de otro objeto, sigo usando puntos
// Ejemplo: user.anddress.city
