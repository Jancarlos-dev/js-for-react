const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", function () {
  alert("Button clicked!");
});

document.body.append(button);
