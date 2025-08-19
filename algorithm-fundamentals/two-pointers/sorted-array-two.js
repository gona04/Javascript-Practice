// array = [1, 3, 4, 5, 7, 10, 12]  
array = [1, 4, 5, 6, 3, 2, 8, 3]
target = 6

function addedToTarget(arr, t) {
    let list = []
    for(let left = 0; left < arr.length; left++) {
        for(let right = left+1; right < arr.length; right++) {
            let sum = arr[left] + arr[right];
            if(sum == t) {
                // if(!list.includes(arr[right])) {
                    list.push([arr[left], arr[right]]); // [0,2] | [4, 2] | []
                // } else {
                //     console.log('In else');
                //    console.log(arr.splice(right,1))
                // }
            }
        }
    }
    return list;
}

console.log(addedToTarget(array, target))