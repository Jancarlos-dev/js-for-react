const name = "laptop";
const price = 2000;
const description = "esta es una laptop de alta gama";
const stock = 10;
const newProduct = {
  name,
  price,
  description,
  stock,
};

console.log(newProduct);
// Aprendí a crear un objeto usando variables que ya había creado antes.
//
// Primero guardé información en variables:
// name, price, description y stock.
//
// Después creé un objeto llamado newProduct y coloqué esas variables dentro.
//
// Como la variable y la propiedad tienen el mismo nombre,
// no fue necesario escribir:
//
// name: name
// price: price
//
// Solo escribí:
//
// name
// price
//
// JavaScript entendió automáticamente que debía tomar el valor
// de cada variable y guardarlo dentro del objeto.
//
// Esto se llama Shorthand Property Names y sirve para escribir
// el mismo código de una forma más corta y limpia.
