/* Problem: Remove Duplicates from a Sorted Array
Given an array of sorted numbers, remove duplicates in-place so that each unique element appears only once. The function should return the length of the new array.

📌 Example:

javascript
Copy
Edit
Input: [1, 1, 2]  
Output: 2  // Unique elements: [1, 2, _]
javascript
Copy
Edit
Input: [0,0,1,1,1,2,2,3,3,4]  
Output: 5  // Unique elements: [0, 1, 2, 3, 4, _] */

function removeDuplicates(array) {
    for(let i = 0; i < array.length - 1;) {
        if(array[i] === array[i+1]) {
            array.splice(i, 1);
        } else {
            i++;
        }

    }
    return array;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))