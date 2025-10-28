function sumRange(range) {
/*     let sum = 0;
    for(let i = 1; i<= range; i++) {
        sum+=i;
    }
    return sum; */
    //Optimized solution 
    return range*(range+1)/2
}

console.log(sumRange(5))