// array = [0,0, 22, 12, 11]
array = [22, 4, 0, 0, 9];

function movingZeros(arr) {
  let pointer = 1;
  let tracker = 0;

  // [22,4,0,0,9]
  // Note I am getting confused on how to control the zero tracker
  //1 < 5 | 2 < 5 | 3 < 5 | 4 < 5 |
  while (pointer < arr.length) {
    // 22 != 0 | 4 != 0 | 0 == 0 | 0 == 0 | 
    if (arr[tracker] == 0) {
      // 0 == 0 | 9 != 0
      if (arr[pointer] == 0) {
        // 4
        pointer++;
      } else {
        //arr[2] = 9
        arr[tracker] = arr[pointer];
        arr[pointer] = 0;
        tracker++;
      }
    } else {
      //1 | 2 |
      tracker++;
      //2 | 3 |
      pointer++;
    }

    //[22,4,0,0,9] | [22,4,0,0,9] | [22, 4, 9, 0, 0]
  }
  return arr;
}

console.log(movingZeros(array));
