/* Creating a basic iteration 
method to be used by all functions */

function iteration(array, fn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(fn(array[i]) !== undefined) newArray.push(fn(array[i]));
  }
  return newArray;
}
/* 
Q1.
Square Every Number Write a function 
that takes an array of numbers and 
returns a new array with each number squared. 
*/
const randomNumbers0 = [1, 2, 3, 4, 5];
// Output: [1, 4, 9, 16, 25]

function squaring(num) {
  return num * num;
}

//USING CUSTOM ITERATION
const newArray = iteration(randomNumbers0, squaring);

console.log('Custom results', newArray);

// USING MAPS
const newArrayMap = randomNumbers0.map((a) => squaring(a));
//Can also write it as following
/* const newArrayMap = numbers.map(a => { return a * a })  */

console.log("Square using maps", newArrayMap);

/* --------------------------------------------------------------------------------------------------------------------- */

/* 
Q2. 
Filter Even Numbers Write a function that takes an 
array of numbers and returns a new array with only 
the even numbers.
 */
const randomNumbers1 = [1, 2, 3, 4, 5, 6];
// Output: [2, 4, 6]

function returnEven(num) {
    if(num%2 === 0) {
        return num
    }
}

//using custom functions
const evenNumbers = iteration(randomNumbers1, returnEven);

console.log('Custom results',evenNumbers);

//using maps and filters
const evenNumbersUsingArrayMethods = randomNumbers1.filter(a => returnEven(a))
console.log('Array methods',evenNumbersUsingArrayMethods);

/* --------------------------------------------------------------------------------------------------------------------- */

/* 
Q3.
Sum of Array Write a function that uses 
reduce to calculate the sum of all 
numbers in an array.
 */

const randomNumbers2 = [10, 20, 30, 40];
// Output: 100

//Using custom function
let total = 0;

function getTotal(a) {
    return total = total + a;
}
function totalResults() {
    for(let i = 0; i < randomNumbers2.length; i++) {
       return getTotal(randomNumbers2[i]);
    }
}
console.log('Custom Results', total);

const result = randomNumbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log('total with reduce', result)