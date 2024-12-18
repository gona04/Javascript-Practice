const radius = [3, 1, 2, 4];

Array.prototype.customMap = function(logic) {
    const output = [];

    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.customMap((a) => {return Math.PI * a * a }));

Array.prototype.customFilter = function(logic) {
    const output = [];

    for(let i = 0; i < this.length; i++) {
        output.push(logic(this.i));
    }

    return output;
}

