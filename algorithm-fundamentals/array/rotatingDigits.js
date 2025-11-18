array = [1, 2, 3, 4, 5, 6, 7];
k = 20;
//[5,6,7,1,2,3,4]

function rotatingDigits(arr, k) {
  let n = arr.length;
  k = k % n;
    let beforeK = arr.splice(0, arr.length - k);
    // let afterK = arr.slice(arr.length - k, arr.length);
    return [...arr, ...beforeK];
  
}

console.log(rotatingDigits(array, k));
