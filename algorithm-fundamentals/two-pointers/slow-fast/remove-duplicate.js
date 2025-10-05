/* Given a sorted array of integers, remove the duplicates
 in-place so that each unique element appears only once.
Example: */
array = [1, 1, 2, 2, 3, 4, 4, 5]; //→ should become [1, 2, 3, 4, 5]
// 0, 1, 2, 3, 4, 5, 6, 7

function unique(arr) {
  let left = 0;
  let right = left + 1;
  let newArray = [];
  // 0 < 1 = true | <- stuck in an infinate loop or an error beyond the array length
  while (right <= arr.length) {
    // 6 <= 7 true | 7 <= 7 true
    // 1 !== 1 false | 1 !== 2 true | 2 !== 2 false | 2 !== 3 true | 3 !== 4 true |
    if (arr[left] !== arr[right]) {
      // 4 !== 4 false | 4 !== 5 true
      newArray.push(arr[left]); // 1 | 2 | 3 | 4
    }
    left++; // 1 | 2 | 3 | 4 | 5 | 6
    right++; // 2 | 3 | 4 | 5 | 6 | 7
  }
  return newArray;
}

console.log(unique(array));

/* 
Issue with the above algorithm is 
the last number gets excluded 
What I need to do... 
*/

// array = [1, 1, 2, 2, 3, 4, 4, 5];
//          0, 1, 2, 3, 4, 5, 6, 7
function unique_two(arr) {
  let left = 0;
  let right = left + 1;
  let newArray = [];
  // 1<=7 true | 3 <= 7 true | 5 <= 7 true | 6 <= 7 true | 8<= 7 false
  while (right <= arr.length) {
    //1 == 1 true | 2 == 2 true | 3 == 4 false | 4 == 4 true
    if (arr[left] == arr[right]) {
      newArray.push(arr[left]); // 1 | 2 | 4
      left = left + 2; //2 | 4 | 7
      right = left + 1; // 3 | 5 | 8
    } else {
      //[] !include 3 true |
      if (!newArray.includes(arr[left])) newArray.push(arr[left]); // 3
      //   newArray.push(arr[right]); // 4 I can remove this because left is revisiting right position
      left++; // 5
      right++; // 6
    }
  }
  return newArray;
}
// array = [1, 1, 2, 2, 3, 4, 4, 5];
          // 0, 1, 2, 3, 4, 5, 6, 7
function unique_three(arr) {
  left = 0;
  right = 1;
  newArray = [];
  //1 < 8 true | 3 < 8 true | 5 < 8 true | 7 < 8 true | 9 < 8 false;
  while (right < arr.length) {
    //1 = 1 true |2 = 2 true| 3= 4 false | 4 = 5 false |
    if (arr[left] == arr[right]) {
      //1 | 2
      newArray.push(arr[right]);
      left = left + 2; //2 | 4
      right = left + 1; //3 | 5
    } else {
      if(!newArray.includes(arr[left]))newArray.push(arr[left]);// 3 
      newArray.push(arr[left]);// 4 | 5
      left=right+1 // 6 | 8 |
      right=right+2 // 7 | 9 |
    }
  }
  return newArray //[1,2,3,4,5] 
}

/* The way to solve now would be more of one 
part will be exploring new options 
the other one will be storing the last 
valid answer */

// array = [1, 1, 2, 2, 3, 4, 4, 5];
          // 0, 1, 2, 3, 4, 5, 6, 7

function unique_four(arr) {
    let tracker = 0;
    let uniqueArr = [];
    // 1 | 6
    for(let explorer = 1; explorer < arr.length; explorer++) {
        //1 = 1 true | 2 = 2 true | 3 = 4 false | 4 = 4 true | 4 = 5
        while(arr[explorer] == arr[tracker]) {
            // 1 | 2 | 4 
            uniqueArr.push(arr[tracker]);
            // 2 | 4 | 7 
            tracker = explorer+1;
            //3 | 5 | 8
            explorer = tracker+1;
        }
        // 3 != 4 true
        if(arr[explorer] !== arr[tracker]) {
            //3 |
            uniqueArr.push(arr[tracker]);
            //5
            tracker++;
        }
    }
}

// array = [1, 1, 2, 2, 3, 4, 4, 5];
          // 0, 1, 2, 3, 4, 5, 6, 7
function unique_five(arr) {
    let tracker = 0;

    let uniqueArr = [];
    //1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    for(let explorer = 1; explorer <= arr.length; explorer++) {
        //1 != 1 false | 1 != 2 true; | 2 != 2 false 
        // 2 != 3 true | 3 != 4 true | 4 != 4 false
        // 4 != 5 true
        if(arr[tracker] !== arr[explorer]) {
            uniqueArr.push(arr[tracker]) // 1 | 2 | 3 | 4
            tracker = explorer; // 2 | 4 | 5 | 7
        }
    }
    return uniqueArr;
}

console.log(unique_five(array))