/*
This code does not follow DRY  
function letAdamLogin() {
    let array = [];
    for(let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return 'Access Granted to Adam';
}

function letEvaLogin() {
    let array = [];
    for(let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return 'Access Granted to Eva';
}

console.log(letAdamLogin())
console.log(letEvaLogin()) */

/* Solution to the above code  */
/* function letUserLogin(user) {
    let array = [];
    for(let i = 0; i < 10000000; i++) {
        array.push(i);
    }
    return `Access Granted to ${user}` ;
}

console.log(letUserLogin('Adam'))
console.log(letUserLogin('Eva')) */

/* Another way of doing the above  */
const giveAccessTo = (user) => `Access Granted to ${user.name}`

function authenticate(veryfy) {
    let array = [];
    for(let i = 0; i < veryfy; i++) {
        array.push(i);
    } 
    return true;
}

function letPerson(user, fn) {
    console.log(fn)
    if(user.level == 'admin') {
        fn(5000000)
    } else {
        fn(100000)
    }
    return giveAccessTo(user);
}

console.log(letPerson({level:'admin',name: 'Sarah'}, authenticate))