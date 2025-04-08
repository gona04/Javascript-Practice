let array = [1, 12, 7, 3, 45, 8];

function selectSort(arr) {
    let si;
    let smallest;
    let sortedArray = [];
    while(arr.length > 0) {  
        si = 0;
        smallest = arr[si];
        for(let i = 1; i < arr.length; i++) {
            if(smallest > arr[i]) {
                si = i;
                smallest = arr[si];
            }
        }
        arr.splice(si,1);
        sortedArray.push(smallest);
    }

    return sortedArray;
}

console.log(selectSort(array));