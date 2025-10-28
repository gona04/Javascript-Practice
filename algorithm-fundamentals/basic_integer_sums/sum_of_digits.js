function digitSum(number) {
    sum = 0;
    let num = number
    while(num > 0) {
        let numToUse = num%10;
        num = Math.floor(num/10);
        sum+=numToUse
    }
    return sum;
}

console.log(digitSum(4091990))