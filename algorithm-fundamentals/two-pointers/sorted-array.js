/* Type: Two Pointers on a sorted array

Given a sorted array of integers and a target value, find if there exist two 
numbers in the array that add up to the target.

Example: */

// array = [1, 2, 4, 7, 11, 15];
array = [2, 7, 8, 9, 10, 3, 4, 5, 6];
target = 15;

/* 
    List of solutions in this case are: 
        none 
*/

function twoNumberSum(arr, t) {
  let sum = 0;
  let indexes = new Set();
  // let results = []
  for (let right = 0; right < arr.length; right++) {
    /* 
      below line was the reason you were making a mistake 
      because you said it should loop till 0 it would every
      time loop till 0 even though those numbers were considered
      before.
      Causing it to repeat combinations
    */
    // for (let left = arr.length - 1; left >= 0; left--)
    for (let left = arr.length - 1; left >= right; left--) {
      sum = arr[left] + arr[right];
      if (arr[left] + arr[right] === t) {
        indexes.add([arr[left], arr[right]]);
      }
    }
  }
  return indexes;
}

console.log(twoNumberSum(array, target));
