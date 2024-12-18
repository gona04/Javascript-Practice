function findThreeLargestNumbers(array) {
    // Initialize the array to hold the three largest numbers
    let threeLargest = [null, null, null];

    for (let num of array) {
        updateLargest(threeLargest, num);
    }

    return threeLargest;
}

function updateLargest(threeLargest, num) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num, 2);
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate(threeLargest, num, 1);
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
        shiftAndUpdate(threeLargest, num, 0);
    }
}

function shiftAndUpdate(array, num, idx) {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) {
            array[i] = num;
        } else {
            array[i] = array[i + 1];
        }
    }
}

// Example usage:
const numbers = [20, 30, 50, 10, 12];
const threeLargestNumbers = findThreeLargestNumbers(numbers);
console.log(threeLargestNumbers); // Output: [30, 50, 20] (or another variation of the three largest numbers)
