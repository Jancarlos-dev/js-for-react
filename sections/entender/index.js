/*
=========================================================
GUÍA RÁPIDA PARA IDENTIFICAR CADA COSA EN JAVASCRIPT
=========================================================

Cuando vea código en JavaScript debo aprender a reconocer
qué es cada cosa. Esto me ayudará a explicar mis ejercicios
cuando el profesor me pregunte qué hice.

---------------------------------------------------------
1. ¿CÓMO IDENTIFICAR RÁPIDAMENTE CADA COSA?
---------------------------------------------------------

"Hola"
→ Es un String (texto).

10
→ Es un Number (número).

true
false
→ Son Boolean (verdadero o falso).

["a", "b", "c"]
→ Es un Arreglo (Array).

{
  nombre: "Hades"
}
→ Es un Objeto (Object).

function saludar() {}
→ Es una Función.

() => {}
→ Es una Arrow Function (función flecha).

return
→ Devuelve un valor desde una función.

const nombre = "Hades";
→ Es una Variable.

---------------------------------------------------------
2. EJEMPLO COMPLETO
---------------------------------------------------------

const usuario = {
  nombre: "Hades",
  edad: 25,
};

const frutas = ["manzana", "pera", "uva"];

function saludar(nombre) {
  return "Hola " + nombre;
}

console.log(saludar(usuario.nombre));

---------------------------------------------------------
3. EXPLICACIÓN DEL EJEMPLO
---------------------------------------------------------

const usuario = {
  nombre: "Hades",
  edad: 25,
};

→ usuario es un Objeto porque utiliza llaves {}.
→ nombre y edad son propiedades del objeto.
→ "Hades" es un String.
→ 25 es un Number.

---------------------------------------------------------

const frutas = ["manzana", "pera", "uva"];

→ frutas es un Arreglo porque utiliza corchetes [].
→ Dentro del arreglo hay varios Strings.

---------------------------------------------------------

function saludar(nombre) {
  return "Hola " + nombre;
}

→ saludar es una Función.
→ nombre es un Parámetro.
→ return devuelve un valor.
→ "Hola " es un String.

---------------------------------------------------------

console.log(saludar(usuario.nombre));

→ console.log() muestra información en la consola.
→ usuario.nombre obtiene el valor de la propiedad nombre.
→ La función devuelve "Hola Hades".
→ Ese resultado se muestra en consola.

---------------------------------------------------------
4. RESUMEN DEL EJEMPLO
---------------------------------------------------------

usuario
→ Objeto.

frutas
→ Arreglo.

saludar
→ Función.

nombre
→ Parámetro.

return
→ Devuelve un valor.

"Hola "
→ String.

25
→ Number.

console.log()
→ Muestra información en la consola.

---------------------------------------------------------
5. TRUCO PARA LOS EXÁMENES
---------------------------------------------------------

Cuando vea código debo hacerme estas preguntas:

¿Tiene [] ?
→ Es un Arreglo (Array).

¿Tiene {} con propiedades?
→ Es un Objeto (Object).

¿Tiene function o => ?
→ Es una Función.

¿Tiene comillas "" o '' ?
→ Es un String.

¿Tiene números?
→ Es un Number.

¿Tiene true o false?
→ Es un Boolean.

¿Tiene return?
→ Está devolviendo un valor.

¿Tiene const o let?
→ Está creando una Variable.

---------------------------------------------------------
REGLA QUE SIEMPRE DEBO RECORDAR
---------------------------------------------------------

[]  = Arreglo
{}  = Objeto
function / => = Función
return = Devuelve un valor
"" = String
123 = Number
true / false = Boolean
const / let = Variable

Si logro identificar estas estructuras, podré entender
mucho mejor cualquier ejercicio básico de JavaScript y
explicar exactamente qué hice cuando el profesor me lo
pregunte.
=========================================================
*/

const cliente = {
  nombre: "hades",
  edad: 40,
  pais: "republica dominicana",
};
console.log(cliente);

// crando este objeto cliente, estamos utilizando un Objeto, el cual se define con llaves {}. Dentro del objeto, tenemos varias propiedades: nombre, edad y pais. Cada propiedad tiene un valor asociado: "hades" es un String, 40 es un Number y "republica dominicana" es otro String.

const frutas = ["manzana", "pera", "uva"];

console.log(frutas);
//  creando este arreglo frutas, estamos utilizando un Arreglo, el cual se define con corchetes []. Dentro del arreglo, tenemos varios elementos, que en este caso son Strings: "manzana", "pera" y "uva".
