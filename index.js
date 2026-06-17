const button = document.createElement("button");
button.innerText = "Click me";

const isauthorized = false; // This can be set based on your authentication logic

button.addEventListener("click", () => {
  if (isauthorized) {
    alert("esta autorizado");
  } else {
    alert("no esta autorizado");
  }
});

document.body.appendChild(button);
