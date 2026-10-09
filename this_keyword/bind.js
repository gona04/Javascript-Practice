const person = {
  name: "Sara",
  sayName() {
    console.log("My name is", this.name);
  }
};

const saved = person.sayName.bind(person);

// many lines later, different place in code:
saved(); 
// Output → "My name is Sara