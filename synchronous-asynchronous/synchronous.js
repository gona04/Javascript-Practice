// PART ONE STARTS
// function getPizza() {
//     return "Pizza"; 
// }
// //It derails to complete this task 
// const pizza = getPizza();
// //Then it executes this 
// console.log(pizza);

// PART ONE FINISH

// PART TWO START 
// let pizza; 

// function orderPizza() {
//     console.log('Order Pizza');
//     setTimeout(() => {
//         pizza = "Seven cheese pizza";
//         console.log(`${pizza} is ready`);
//     }, 2000);
//     console.log('Pizza was ordered')
// }

// orderPizza();
// console.log('Call my friend');
// console.log(`Eat ${pizza}`);

// PART TWO ENDS 

// POSSIBLE SOLUTION 
function orderPizza() {
        console.log('Order Pizza');
        setTimeout(() => {
            pizza = "Seven cheese pizza";
            console.log(`${pizza} is ready`);
            //EAT PIZZA CAN BE CALLED HERE 
            console.log(`Eat ${pizza}`);
        }, 2000);
        console.log('Pizza was ordered')
    }
    
    orderPizza();
    console.log('Call my friend');

/*
    THIS IS NOT A GOOD SOLUTION SINCE THE METHOD OF ORDERING 
    PIZZA I AM EATING IT TOO THAT IS NOT THE RIGHT WAY TO WRITE IT
    THUS WE TRY TO USE CALLBACKS AS IT TRIGGERS THE VALUE WHEN THE VALUE IS SET
*/
    