/* 
You are given an array of positive integers arr and a number target.
Find the length of the smallest contiguous subarray whose sum is greater than or equal to target.
If no such subarray exists, return 0.

✅ Example:

arr = [2, 3, 5, 2, 4, 3], target = 7

Subarray [4,3] has sum 7 → length = 2

Subarray [2,4,3] has sum 9 → length = 3
👉 The smallest length = 2 
*/

/*
    So the logic that I am thinking is I do 
    7 - 2 = 5 if the next number is X  or > 5 
    7-3 = 4 the next number is > 4 
    7-5 = 2 the next number is 2
    7-4 = 3 the next number is 3

    but the above is only assuming whether the sum of two is == 7 or greater
*/

let array = [2, 3, 1, 2, 4, 3], target = 7

let remaining = 0;
let lastIndex = [];

function findMaxLength(arr, tar) {
    arr.reduce((sum, next, currentIndex) => {
        sum +=next;  // 0 + 2 = 2 | 2 + 3 = 5 | 5 + 1 = 6 | 6 + 2 = 8 | 0 + 4 | 4 + 3 = 7
        remaining = tar - sum;// 7 - 2 = 5| 7 -5 = 2 | 7 -6 = 1 | 7 - 8 = -1| 7 - 4 = 3| 7 - 7 = 0
        if(remaining <= 0) { // 7 <= 0 == false | false | false | false | true | false | true
            sum = 0; // 0 | 0
            lastIndex.push(currentIndex); // 3 | 5
        } 
        return sum; // 2 | 5 | 6 | 8 | 4 | 7
    },0)
    return lastIndex;
}

console.log(findMaxLength(array,target));