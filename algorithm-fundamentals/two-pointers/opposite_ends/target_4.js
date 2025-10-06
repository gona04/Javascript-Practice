array = [1,3,4,6,8,10]
target = 11;

function findingSum(arr, t) {
    let start = 0;
    let end = arr.length -1;
    let sumArray = [];

    //  nums = [1,3,4,6,8,10]
    //  index = 0,1,2,3,4, 5

    // 0 < 5 true | 1 < 4 true | 2 < 3 true | 3 < 3 false 
    while(start < end) {
        //1 + 10 = 11 | 11 | 10
        let sum = arr[start] + arr[end];
        //11 > 11 false
        if(sum > t) end--;
        if(sum < t) start++; // 3
        else { // 11 == 11 | 11 
            // {0:1,5:11} | {1:3, 4: 8}
            let obj = {}
            obj[start] = start;
            obj[end] = arr[start];
            sumArray.push(obj);
            start++; // 1 | 2
            end--; // 4 | 3
        }
    }
    // [{0:1,5:11} , {1:3, 4: 8}]
    return sumArray; 
}

console.log(findingSum(array,target))