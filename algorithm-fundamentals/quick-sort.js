let array = [12, 1, 5, 3, 45, 8];
/* 
    Revising what quick sort is
    8 is the median for the first round. 
    12 < 8 false DO nothing 
    1 < 8 swap 12's postion with 1
 */


// if the number is smaller than the median you move it to the left

function quickSort(arr) {
    let median = arr[arr.length -1]; // 5 
    let left = [];
    let right = [];
    // facing problem understanding how the array will move forward and also backwards
    //So simplify I will only move forward and left will collect the num of steps moved forward
    for(let i = 0; i < arr.length -1 ; i++) {
        if(arr[i] < median) {
            //this will let me know which index the value is on
           left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    if(arr.length <= 1) return arr;
    return [...quickSort(left), median, ...quickSort(right)];
}


console.log(quickSort(array));