// function orderPizza(callback) {
//     setTimeout(() => {
//         const pizza ='Peri peri Pizza';
//         callback(pizza)
//     }, 2000)
// }

// function pizzaReady(pizza) {
//     console.log(`Eat the ${pizza}`);
// }

// orderPizza(pizzaReady)
// console.log(`Call a friend`);

/*
eg of asynchronous code
window.addEventListener('click', function() {
    console.log('Clicked')
})

Problem with callbacks -> Callback hell
*/

function thing1(callback) {
    console.log('Call pizza shop');
    callback();
}

function thing2(callback) {
    console.log('Order the pizza');
    callback();

}

function thing3(callback) {
    console.log('Eat the pizza');
}


thing1(() => {thing2(() => {thing3()})})
