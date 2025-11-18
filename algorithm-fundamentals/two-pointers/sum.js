/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0;
    let end = nums.length -1;
    let sum =0;
    let indexs = []

    while(start < end) {
        sum = nums[start]+nums[end];
        if(sum == target) {
            indexs.push(start); 
            indexs.push(end);
            return indexs
        }
        else if(sum > target) end--;
        else if(såum < target) start++;
    }

    return indexs
};
nums = [2,7,11,15], target = 9

console.log(twoSum(nums,target))