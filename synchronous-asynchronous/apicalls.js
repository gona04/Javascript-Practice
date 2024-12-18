// https://bible-api.com/john%203:16

/*
    Callbacks are functions that are passed to parameter of the function 
    so they will call that function after the function is executed
*/

// function firstFunciton(parameter, callback) {
//     callback();
// }

/* 
    Promise 3 states: Pending, Fullfilled, Rejected
*/

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve('Yes resolved the promise!');
    } else {
        reject('No! rejected the promise');
    }
});

// console.log(myPromise);


// myPromise.then(value => {
//     console.log(value);
//     return value + 1;
// })
// .then(newValue => {
//     console.log(newValue)
// })
// .catch(err =>{
//     console.error(err);
// })

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('My next promise resolved')
    }, 3000)
})

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value)
})