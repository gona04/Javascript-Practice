let array = [12, 1, 7, 3, 45, 8];

function insertSort(arr) {
    let pre = 0;
    let current = 1;

    while(current < arr.length) {
        while(arr[pre] > arr[current]) { // 12 > 1 | 12 > 7 , 7 > 12 | 12 > 3, 3 > 12
            let temp = arr[pre];  // 12 | 12 | 12
            arr[pre] = arr[current]; // 1 | 7 | 3
            arr[current] = temp; // 12 | 12 | 12
        } 
        //[1, 12, 7, 3, 45, 8] | [1, 7, 12, 3, 45, 8]
        current++; // 2 | 3
        pre = current -1; //1 | 2
    }

}

console.log(`answer is ${insertSort(array)}`);