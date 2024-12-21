/*
Because of the clousure 
functionality the below 
fun prints the value of callMe
*/
function callMeMaybe() {
    const callMe = "Hi! I am now here!"
    setTimeout(function() {
        console.log(callMe);
    },4000)
}

callMeMaybe()

//Exe 2
let view;
let count = 0;
function initialize() {
  let call = 0;
  return function () {
    if (call > 0) {
      return;
    } else {
      view = "🗻";
      console.log("View has been set!");
      console.log(view);
      count++;
    }
  };
}

const sOnce = initialize()
sOnce();
sOnce(); 

// A counter closure function that returns a counter
function createCounter() {
   let count = 0; 
   return {
    increament() {
        count++;
    }, 
    getValue() {
        return count;
    }
   }
}

const counting = createCounter();
counting.increament()
counting.increament()
console.log(counting.getValue());