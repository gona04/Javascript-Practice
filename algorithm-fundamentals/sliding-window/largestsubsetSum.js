/* Finding highest total with sub array of 4 */
let array = [3, 8, 2, 5, 7, 6, 12];
//1st iteration = 3 + 8 + 2 + 5 = 18
// index                 0    1    2   3
//2nd iteration = 8 + 2 + 5 + 7 = 22
// index           1 2 3 4
//3rd iteration = 2 + 5 + 7 + 6 = 20
// index           2 3 4 5
//4rd iteration = 5 + 7 + 6 + 12 = 30 <- largest o(n2)
//index            3 4 5 6

//1st iteration = 3 + 8 + 2 + 5 = 18
// index          0   1   2  3
//2nd iteration = 18 - arr[0] + arr[4] = 22
// index          total -   0   +  4
//3rd iteration = 22 - arr[1] + arr[5] = 14 + 6 = 20
// index          total -   1   +  5
//3rd iteration = 20 - arr[2] + arr[6] = 14 + 6 = 30
//index           total -   2  +  6

function maxSum(arr, gap) {
  let sum = 0;
  let iteration = 0;
  let highest = {sum:0, iteration:0};
  for (let i = 0; i < arr.length; i++) {
    iteration += 1;
    let j = i + (gap-1);
    if (j < arr.length) {
      if (j == (gap-1)) {
        while (j >= i) {
          sum = sum + arr[j];
          j--;
        }
      } else {
        sum = sum - arr[i - 1] + arr[j];
      }
      console.log("iteration num", iteration, sum);

      if(sum > highest.sum) {
        highest.sum = sum;
        highest.iteration = iteration
      }
    }
  }
  return highest;
}

console.log('highest =', maxSum(array,2));
