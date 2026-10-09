
const networking = {
    yourName: undefined, 
    knownPeople: ['Sonal', 'Nehal'],
    introduce: function() {
        return `Hello my name is ${this.yourName}`;
    },
    greet: function() {
        this.knownPeople.forEach((person) => {
            console.log(`Hey!!! ${person}, I hope you remember me I am ${this.yourName}`)
        })
    }
}

networking.yourName = 'Hellen';

// console.log(networking.introduce());

console.log(networking.greet());
