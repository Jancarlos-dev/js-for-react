const title = document.createElement("h1");
const hades = document.createElement("p");

title.innerText = "hola hades";
hades.innerText = "hades es un dios griego";

document.body.append(title);
document.body.append(hades);

// Aprendí que:
// createElement() = crear elemento
// innerText = agregar texto
// append() = mostrar el elemento en la página

const title = document.createElement("h1");
title.innerText = "hola hades";

const button = document.createElement("button");
button.innerText = "click";

button.addEventListener("click", function () {
  title.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Accusamus, aspernatur. Doloremque, tempora. Officiis natus deserunt consequatur, laboriosam architecto perspiciatis pariatur inventore adipisci. Exercitationem nemo accusantium molestias eligendi saepe.,";
  alert("se realizo un click");
});

document.body.append(title);
document.body.append(button);

// Ejemplo del mundo real:
//
// Imaginé que estaba creando una página desde cero.
//
// Primero creé un título (<h1>), como si fuera un letrero vacío.
// Luego le escribí el texto "hola hades".
//
// Después creé un botón y le puse la etiqueta "click"
// para que el usuario supiera qué debía presionar.
//
// Con addEventListener() le di una instrucción al botón:
// "Cuando alguien haga clic en ti, ejecuta esta función".
//
// Cuando el usuario presiona el botón:
//
// 1. El texto del título cambia por un texto más largo.
// 2. Aparece una alerta avisando que se realizó un clic.
//
// Finalmente usé append() para colocar el título y el botón
// dentro de la página y que fueran visibles para el usuario.
//
// Lo más importante que aprendí:
//
// JavaScript puede crear elementos HTML, mostrarlos en la página
// y reaccionar a las acciones del usuario.
//
// En este ejemplo, el botón espera un clic y cuando lo recibe,
// ejecuta código que modifica el contenido de la página.
