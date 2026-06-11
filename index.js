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
