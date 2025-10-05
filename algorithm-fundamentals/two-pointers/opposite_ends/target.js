/* Pair Sum in Sorted Array

Example: arr = [1, 2, 3, 4, 6], target = 6

Find if there exists a pair of numbers that add up to the target. */
// array = [1, 2, 3, 4, 6], target = 6;
// array_two = [2, 3, 4, 5, 6];
// target_two = 9;
Problem:
given_arr = [1, 3, 4, 5, 7, 10, 11];
target = 14;

function targetSum(arr, t) {
  let start = 0;
  let end = arr.length - 1;
  let result = [];
  let sum = 0;

  while (start < end) { // 3 < 2 = false 
    // arr[0] + arr[4] == 2 + 6 = 8 | arr[1] + arr[4] == 3 + 6 = 9
    sum = arr[start] + arr[end]; //arr[2] + arr[3] = 4 + 5 = 9
    if (sum > t) { //8 > 9 = false | 9 > 9 = false | false
      end--;
    } else if (sum < t) { // 8 < 9 = true | 9 < 9 = false | false
      start++; // 1
    } else {
      result.push({ start, end }); // {1,4} | {2,3}
      start++; // 3
      end--; // 2
    }
  }
  return result; // [{1,4}, {2,3}]
}

console.log(targetSum(given_arr, target));
