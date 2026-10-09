function sum(a, b, c) {
    console.log(a+b+c);
}

function unclockLevel(item1, item2, item3) {
    console.log('Level completed');
}
function curry(fn) {
    return function currying(...args) {
       if(args.length >= fn.length) {
         return fn.apply(this, args);
       } else {
        return currying.bind(this, ...args);
       }
    } 
}

// const total = curry(sum);
// total(1)(2)(3);
// total(1,2)(3);
// total(1)(2,3);
// total(1, 2, 3);

const tombraider = curry(unclockLevel);
tombraider('gun','bullets')('keys');

const pubg = curry(unclockLevel);
pubg('brokenclass')('money')('creditcard');

