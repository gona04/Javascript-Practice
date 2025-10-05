array = [1,3,4,6,8,10]
target = 11;

function sumTarget(arr, t) {
    let start = 0; 
    let end = arr.length -1; 
    let result = [];
    //0 < 5 = true | 
    while(start < end) {
        sum = arr[start] + arr[end]; // 11
        if(sum > t) {
            console.log('sum > t')
            end--;
        } else if(sum < t) {
            console.log('sum < t')
            start++;
        } else {
            console.log('sum == t')
            result.push({start:arr[start],end:arr[end]})
            end--;
            start++;
        }
    }
    return result;
}

console.log(sumTarget(array,target))