// The “area” is min(height[start], height[end]) * (end - start).
//largest sum
array = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function largestSum(arr) {
  start = 0;
  end = 8;
  sum = 0;

  while(start < end) { // 0 < 8 = true | 0 < 7 | 1 < 7
    let newSum = arr[end] + arr[start]; // 1 + 7 = 8 | 1 + 3 = 4 | 8 + 7 =  15 |
    if(sum < newSum){ // 0 < 8 = true | 8 < 4 = false
        sum = newSum // sum = 8
        end--; // 7
    } else if(sum > newSum) { // 8 > 4 = true |
        start++; // 1
    } else {
        start++;
        end--;
    }
  }
  return sum;
}

console.log(largestSum(array));
