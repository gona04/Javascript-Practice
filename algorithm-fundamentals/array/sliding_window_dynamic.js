arr = [2, 3, 1, 2, 4, 5] 
target = 7


function minSubString(ar, t) {
    let right = 0; 
    let left = 0;;

    let sum = 0;
    let min = Infinity;

    while(right < ar.length) {
        if(sum < t) {
            sum += arr[right];
            right++;
        } 
        
        while(sum >=t && left <= right){
            min = Math.min(min, (right - left));
            sum -= ar[left];
            left++;
        }
    }
    return min;
}

console.log(minSubString(arr,target));