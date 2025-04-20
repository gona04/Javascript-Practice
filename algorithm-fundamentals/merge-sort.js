let array = [1,8,0,27,6, 44];

function mergeSort(arr) {
    if(arr.length <= 1) return arr; 
    let mid = Math.round(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid,arr.length));

    return merge(left, right);
}

function merge(l,r) {
    let newArray = [];
    let i = 0;
    let j = 0;

    while(i < l.length && j < r.length) {
        if(l[i] < r[j]) {
            newArray.push(l[i]);
            i++
        } else {
            newArray.push(r[j]);
            j++;
        }
    }

    return newArray.concat(l.slice(i)).concat(r.slice(j))
}

console.log(mergeSort(array))