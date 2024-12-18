// console.log("1-----");
// console.log(teddy);
// var teddy = "bear";

// function sing() {
//   console.log("Hu la la la");
// }

/* Problem with hoisting  */

// var ff = "Raajma";

// function foodThoughts() {
//   //A new execution context is created for funciton which defines ff = undefined as var ff is written benith
//   console.log(`First it was ${ff}`);

//   //If I do not use the keyword var before ff it will change the gobal obj ff
//   var ff = "Chole";

//   console.log(`Now it is ${ff}`);
// }

// foodThoughts();

/* Solutiuon is avoid using var  */

//PRACTICE 1
// Exercise 4
// function bigBrother() {
//   function littleBrother() {
//     return "it is me!";
//   }
//   return littleBrother();

//   function littleBrother() {
//     return "no me!";
//   }
// }

// console.log(bigBrother());
/* 
ANSWE IS 'no me!' because hoisting will 
execute all the function declaration 
first then the place we call the
function from doesnt matter 
*/

/* 
  So with let if I try to use it before the declaration it
  will give me an error regardless of whether the value 
  is assigned or not after the declaration if we try to 
  access it gives undefined if the value is not assigned
 */

debugger;
var a; // Declare a variable 'a'
let b = 10; // Declare a variable 'b'
function doSomething() {
    let b;
    b = 12;
    console.log('a', a); // 'a' is accessible here
    function doSomethingElse() {
        console.log('b', b);
    }
    doSomethingElse();
}
console.log(b);
doSomething();
