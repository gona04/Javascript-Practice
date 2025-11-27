function sum(a,b,c,d) {
    return a+b+c+d;
}

function curry(fn) {
    return function currying(...args){
        if(args.length >= fn.length) {
            return fn.apply(this,args);
        } else {
            while(args.length < fn.length) {
                return currying.bind(this,...args);
            }
        }
    }
}

let doSum = curry(sum);
console.log(doSum(2)(4)(4)(5))
console.log(doSum(9, 4, 4, 5))