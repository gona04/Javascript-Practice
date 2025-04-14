/* Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2] // because numbers[0] + numbers[1] == 2 + 7 == 9 */

function sunNumbers(array, target) {
  //BRUDE FORCE METHOD
  let left = 0;
  let right = array.length -1;

  while(left < right) {
    if(array[left] + array[right] === target) {
        let result = {left: left, right: right}
        left++;
        return result;
    } 
    right--;
  }
}


console.log(sunNumbers([2, 7, 11, 15], 18));