/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  [0,1,0,3,12]
//   0 1 2 3 4
// [0,0,1]
//  0 1 2
//Works but not the solution
var moveZeroes = function(nums) {
   let tracker = [];
   let newArray = [];

   for(let explorer = 0; explorer < nums.length; explorer++) {
    if(nums[explorer] == 0) {
        tracker.push(0);
    } else {
        newArray.push(nums[explorer])
    }
   }
   newArray = newArray.concat(tracker);
   nums = newArray;
   return nums; 
};


console.log(moveZeroes([0,1,0,3,12]));
//  [0,1,0,3,12]
//   0 1 2 3 4
function moveZeroes_two(nums) {
    let tracker = 0;
    let explorer = 1; 
    while(explorer < nums.length) {

    }
}