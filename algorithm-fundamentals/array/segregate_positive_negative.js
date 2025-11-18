array = [-2,-4,-7, 6, -5, 8, -3, 1]

function negativePositive(arr) {
    let negative = [];
    let positive = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) negative.push(arr[i])
        else positive.push(arr[i])
    }

    return [...positive, ...negative]
    
}

console.log(negativePositive(array))