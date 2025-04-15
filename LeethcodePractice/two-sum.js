let array = [4, 4, 5, 8];
let target = 8;

function twoSum(arr, t) {
    let map = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(map.get(arr[i]) == undefined) {
            map.set((t - arr[i]), i);
        } else {
            let otherIndex = map.get(arr[i]);
            return [otherIndex, i];
        }
    }
    console.log(map.get(7));
}

console.log(twoSum(array, target));