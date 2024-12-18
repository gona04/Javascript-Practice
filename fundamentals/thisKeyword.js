/* 
First Example
const jade = {
    name: 'Jade',
    //Option2
    //greet: () => console.log(`${jade.name} says hi`)
}

const thor = {
    name: 'Thor',
    //Option 2
    //greet: () => console.log(`${thor.name} says hi`)
}

/* //Option 1
function hero(hero) {
    console.log(this);
    console.log(`${hero.name} says hi`);
}

hero(thor);
hero(jade); */

// Option 3
/* Object.prototype.greet = function () {
    console.log(`${this.name} says hi`)
}

thor.greet() 

*/

const alex = {
    name: 'Alex',
    friend: {
        greet : function() {
            console.log(`${this.name} says hi`)
        }
    }
}

alex.friend.greet()