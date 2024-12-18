function multiplied(num) {
    numberToMultipliedby = num;
    return function numberToMulby(newNum) {
        return newNum * num;
    }
}
const mulBy3 = multiplied(3)
console.log(mulBy3(3));