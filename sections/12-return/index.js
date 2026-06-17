// Ejemplo: Crear un botón desde JavaScript
const button = document.createElement("button");

// Aquí le agrego el texto que se mostrará dentro del botón
button.innerText = "Click me";

// Aquí creo una variable booleana (true o false)
// que representa si el usuario está autorizado o no
const isauthorized = false;

// Aquí agrego un evento al botón.
// Cuando el usuario haga clic, se ejecutará esta función.
button.addEventListener("click", () => {
  // Aquí verifico si el usuario está autorizado
  if (isauthorized) {
    // Si la variable es true, muestra este mensaje
    alert("esta autorizado");
  } else {
    // Si la variable es false, muestra este mensaje
    alert("no esta autorizado");
  }
});

// Finalmente agrego el botón al body del documento
// para que pueda verse en la página web
document.body.appendChild(button);
