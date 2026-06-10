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
