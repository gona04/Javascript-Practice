const user = {
  name: "Ayan"
};

function greet(greeting) {
  console.log(greeting, this.name);
}

greet.call(user, "Hello");
// Output → "Hello Ayan"
greet() 