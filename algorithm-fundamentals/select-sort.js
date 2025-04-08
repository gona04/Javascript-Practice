let array = [1, 12, 7, 3, 45, 8];
//[1,3,7,8,12,45]
let sortedArray = [];

function selectSort(arr) {
    if(arr.length < 1) return; 

    let si = 0;
    let smallest = arr[si];
   for(let i = 1; i < arr.length; i++) {
    if(smallest > arr[i]) {
        si = i;
        smallest = arr[si];
    }
   }
   sortedArray.push(smallest);
   arr.splice(si, 1);
   return selectSort(arr);
}

selectSort(array)
console.log(sortedArray);