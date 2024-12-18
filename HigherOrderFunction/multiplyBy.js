/* 
   returns functions 
*/
const multiply = function(num1) {
   return function(num2)  {
        return num1 * num2
   }
}

console.log(multiply(2)(6));

//TAKES FUNCTIONS AS PARAMETER
const claculate = function(num, fn) {
   return fn(num);
}

function sum(num) {
   return num[0] + num[1];
}

function multiply(num) {
   return num[0] * num[1];
}

console.log(claculate([1,2], sum));
console.log(claculate([1,2], multiply))