const radius = [3, 1, 2, 4];

function circle(radius, fn) {
    const output = [];

    for(let i = 0; i < radius.length; i++) {
        output.push(fn(radius[i]));
    }

    return output;
}

Array.prototype.calculate = function(logic) {
    const output = [];

    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }

    return output;
}

function area(r) {
    return Math.PI * r * r;
}

function circumference(r) {
    return 2 * Math.PI * r;
}

function diameter(r) {
    return 2 * r;
}

// console.log(circle(radius,area));
console.log(radius.map(area));
console.log(radius.calculate(area));

