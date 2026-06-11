const user = {
  name: "hades",
  age: 30,
};

function printUserInfo(user) {
  return "<h> hola " + user.name + "</h>";
}
console.log(printUserInfo(user));

document.body.innerHTML = printUserInfo(user);
