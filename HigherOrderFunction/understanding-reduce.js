/*
Simple reduce functions
*/

/* *****************************************************************************************************
                                        Q1 Find the Sum of an array
***************************************************************************************************** */
const randomNums = [1, 1, 1, 2, 1, 1];

// Custom way of doing the sum
function sum() {
    let total = 0;
    for (let i = 0; i < randomNums.length; i++) {
        total += randomNums[i];
    }
    return total;
}

console.log('Sum using loop:', sum());

const sumResult = randomNums.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log('Sum using reduce:', sumResult);


/* ***************************************************************************************************** 
                                        Q2 Finding Max number
 ***************************************************************************************************** */
// Custom way of solving
let max = 0;
randomNums.forEach(a => {
    if (a > max) {
        max = a;
    }
});
console.log('Max value using loop:', max);

const maxResult = randomNums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, 0);

console.log('Max value using reduce:', maxResult);

/* ***************************************************************************************************** 
                                        Q3 Grouping a property
 ***************************************************************************************************** */
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Harmeet', age: 30 },
    { name: 'Roopa', age: 65 },
];

// Custom Way
person = {}

people.forEach(p => {
    let age = p.age
    if(!person[age]) {
        person[age] = [];
    }
    person[age].push(p)
})

console.log('Custom: Person obj is', person);

// using reducer
const groupByAge = people.reduce((acc, current) => {
    let age = current.age
    if(!acc[age]) {
        acc[age] = [];
    }
     acc[age].push(current);
     return acc;
}, {})

console.log('Reduce: Person obj is', groupByAge);

/* ***************************************************************************************************** 
                                        Q4 Flatening an array
                                        Flatten a 2D Array
 ***************************************************************************************************** */
// const input = [[1, 2], [3, 4], [5]];
const input= [[1,1,1], [2,3,5,6], 2]
// Output => [1,1,1,2,3,5,6,2]
// Output => [1, 2, 3, 4, 5]

//Custom way
let outputC = []; 
input.forEach(small=> {
    if(Array.isArray(small)) {
        small.forEach(smaller => {
            outputC.push(smaller)
         })
    } else {
        outputC.push(small)
    }
})

console.log('Custom: Flat output is:', outputC);
console.log('using inbuilt method',input.flat())

//Using reduce 

const flatedArray = input.reduce((acc, curr) => {
    if(Array.isArray(curr)) curr.forEach(a => acc.push(a))
    else acc.push(curr);
    return acc
}, [])

console.log('Custom: Flat output is:', flatedArray)

/* ***************************************************************************************************** 
                                    Q5. Count Occurrences of Elements
                                    Count how many times each element appears in an array.
***************************************************************************************************** */
let input2 =  ['apple', 'banana', 'apple', 'orange', 'banana', 'banana' ] 
//→ Output: { apple: 2, banana: 2, orange: 1 }

let output2 = {};
let count = 1;
//Custom way
input2.forEach(a => {
    if(!output2[a]) {
        output2[a] = {};
        count = 1;
    } else {
        count++;
    }
    output2[a] = count;
})
console.log(output2)

//Using reduce 
const output2R = input2.reduce((arr, curr) => {
    // arr = {}
    if(!arr[curr]){
        arr[curr] = {}; 
        count = 1;
    }
    else count ++;
    arr[curr]= count;
    return arr
}, {});

console.log(output2R);