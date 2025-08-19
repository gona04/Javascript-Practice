/* 
Given a sorted array of integers and a number k, 
find if there exists a pair of numbers such 
that their difference is exactly k.
*/

array = [1, 3, 5, 8, 12]  
k = 7  

//Answer: true (because 12 - 5 = 7)

function findDifference(arr, t) {
    let listCombination = [];
    for(let left = 0; left < arr.length; left++) {
        for(let right = arr.length -1; right >= left; right--) {
            let diff = arr[right] - arr[left];
            if(diff === t) listCombination.push([arr[right], arr[left]])
        }
    }
    return listCombination;
}

console.log(findDifference(array,k));