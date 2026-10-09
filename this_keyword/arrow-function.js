const networking = {
    yourName: undefined,
    peopleMet: ['Sonal', 'Priya'],
    introduce: function() {
        return `Hello my name is ${this.yourName}`
    },
    greet: function(){
        this.peopleMet.map(function(person) {
            console.log(`Hello ${person}, I am ${this.yourName}, I hope you remember me`)
        })
        
    }
}

networking.yourName = 'Hellen';
// console.log(networking.introduce());
console.log(networking.greet())