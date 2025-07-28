//To avoid this we can use 'use strict'
'use strict';

function wired() {
    return height; // will return undefined because hoisting will declare a var height = undefined
}

console.log(wired()) // gives an error of not defined if used use strict else will return undefined


