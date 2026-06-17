function tsr() {
  document.body.innerHTML = "what?";
  console.log("did it work? Yes, yes it did.");
}

let users = [
  {
    name: "Usman",
    age: 19,
    isStudent: true,
  },
  {
    name: "Usman",
    age: 19,
    isStudent: true,
  },
];

for (let user of users) {
  for (let key in user) {
    console.log(key.valueOf());
  }
}
