Object.prototype.greet = function() {
    console.log(`${this.name} says hello there`)
    console.log(this)
}

const goonja = {
    name: 'Goonja'
}

goonja.greet()