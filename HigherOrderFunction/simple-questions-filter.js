//Solving with custom HOF
function customFilter(arr, logic) {
    let newArr = [];
    arr.forEach(a => {
       if(logic(a) !== undefined) {
            newArr.push(logic(a))
       }
    })
    return newArr 
}

/* 
Q1.
Given an array of numbers,
write a function that uses filter() 
to return only the even numbers. 
*/
const numbers = [1, 2, 3, 4, 5, 6];
// Output: [2, 4, 6]

function evenLogic(a) {
    if(a%2 === 0) return a
}

function oddLogic(a) {
    if(a%2 !== 0) return a;
}
console.log('Even Number C', customFilter(numbers, evenLogic));
console.log('Odd Number C',customFilter(numbers, oddLogic));
console.log('Even Number Filter', numbers.filter(a => evenLogic(a)));
console.log('Odd Number Filter', numbers.filter(a => oddLogic(a)));

/*
Q2. 
Use filter() to create a new array with only the strings 
that are longer than 3 characters from an array of words:
*/
const words = ['apple', 'cat', 'banana', 'dog'];
// Output: ['apple', 'banana']

function longerThan3(a) {
    if(a.length > 3) return a;
}

console.log('Longer than 3 letter words C', customFilter(words, longerThan3));
console.log('Longer than 3 letter words Filter', words.filter(a => longerThan3(a)));

/*
Q3.
Filter out the names from an 
array that start with the letter 'A':
*/
const names = ['Alice', 'Bob', 'Alex', 'Charlie'];
// Output: ['Bob', 'Charlie']

function withoutAStarters(a) {
    if(a[0] !== 'A') return a
}

console.log('Custom filtering out a words', customFilter(names, withoutAStarters));
console.log('Filtering out a', names.filter(a => withoutAStarters(a)))

/*
Q4. 
Write a function that filters out objects in an array 
based on a specific property value 
(e.g., keeping only objects where age > 21):
*/

const people = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 25 }
  ];
  // Output: [{ name: 'Alice', age: 22 }, { name: 'Charlie', age: 25 }]

  function above21(a) {
    if(a.age > 21) return a
  }

console.log('Custom filtering above 21', customFilter(people, above21));
console.log('Filtering out above 21', people.filter(a => above21(a)))

/*
Q5.
Filter out elements from an array of numbers 
to keep only those that are divisible by 3:
*/

const numbers1 = [3, 6, 9, 12, 15, 20];
// Output: [3, 6, 9, 12, 15]

function divisibleBy3(a) {
    if(a%3 === 0) return a
}

console.log('Divisible by 3 CF', customFilter(numbers1, divisibleBy3));
console.log('Divisible by 3', numbers1.filter(a => divisibleBy3(a)));

/*
Q6. 
Given an array of student objects, 
filter out students who have a score less than 70:
*/
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 95 }
  ];
  // Output: [{ name: 'Alice', score: 85 }, { name: 'Charlie', score: 95 }]

  function destictionStudents(a) {
    if(a.score > 70) return a
  }

  console.log('Above average students CF', customFilter(students, destictionStudents));
  console.log('Above average students', students.filter(a => destictionStudents(a)));

/*
Q7. 
Filter out the objects in an array of product objects to
only include products with a price greater than $100:
*/

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 50 },
    { name: 'Monitor', price: 200 }
  ];
  // Output: [{ name: 'Laptop', price: 1000 }, { name: 'Monitor', price: 200 }]

  function above100(a) {
    if(a.price > 100) return a;
  }

  console.log('Above $100 products are CF', customFilter(products, above100));
  console.log('Above $100 products are', products.filter(a => above100(a)));
