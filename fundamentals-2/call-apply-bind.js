const wizard = {
    name: 'Merlin',
    health: 100,
    heal() {
       return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

//Can share the heal function from wizard 
console.log('1', archer);
wizard.heal.call(archer);
console.log('2', archer);
// console.log(wizard.heal())