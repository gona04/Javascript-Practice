/* Creating a common iteration method for all the sums  */
function iterating(array, fn) {
  const newName = [];
  for (let i = 0; i < array.length; i++) {
    if(fn(array[i]) !== undefined) {
      newName.push(fn(array[i]));
    }
  }
  return newName;
}

/*
        Step 1: Capitalize names in a list
        You have a list of names, and you want to
        capitalize the first letter of each name.
*/

// USING CUSTOM MAPS

const names = ["alice", "bob", "charlie"];

function convertingToCamelCase(name) {
  const remainingName = name.slice(1);
  return name[0].toUpperCase() + remainingName;
}

const newList = iterating(names, convertingToCamelCase);

console.log("Custom maps", newList);

// USING MAP
const newNames = names.map((a) => {
  let remaining = a.slice(1);
  return a[0].toUpperCase() + remaining;
});

console.log("inbuilt Maps", newNames);

/* ====================================================================== */
/*
        Step 2: Filter even numbers
        You have a list of numbers and need 
        to keep only the even ones.
*/

// WITHOUT INBUILT FILTER 
const numberList = [1, 2, 3, 4, 5, 6];

function isEven(i) {
  if(i % 2 === 0) {
    return i
  }
}

const result = iterating(numberList, isEven);

console.log("Custom Filter", result);

/* USING INBUILT FILTER */
const inbuiltEvenNumbers = numberList.filter((a) => a % 2 === 0);
console.log("Inbuilt Filter", inbuiltEvenNumbers);

/* ====================================================================== */
/*
        Step 3: Calculate total price
        You have a shopping cart with 
        items and their prices. Find 
        the total price.
*/
//Without Filter
const cart = [
    { item: 'Laptop', price: 1000 },
    { item: 'Phone', price: 500 },
    { item: 'Tablet', price: 300 },
  ];
let totalPrice = 0;
  function calculateTotal(obj) {
    return totalPrice = totalPrice+obj.price;
  }

  function iterate(array, fn) {
    let total;
    array.forEach(a => {
       total = fn(a)
    })
    return total;
  }

  console.log('Custom total Price',iterating(cart,calculateTotal));
  console.log('Custom total Price2',iterate(cart,calculateTotal));

  //USING BUILTIN Map

  let list = cart.map(a => { return a.price});
  console.log(list);
  let totalInbuiltList = 0; 
  list.forEach(a => totalInbuiltList = totalInbuiltList+a);
  console.log('inbuilt total price', totalInbuiltList);

  /* ====================================================================== */
/*
      Q4. Names of high-scoring students
      From a list of students and scores,
      get the names of those who scored 
      above 80.
*/
//Without Filter
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 95 },
];

function filterStudents(s) {
  if(s.score > 80) {
    return s.name
  }
}

function iterateStudents() {
  let scholarList = [];
  students.forEach(s => {
    const result = filterStudents(s)
    if(result) {
      scholarList.push(result);
    }
  })
  return scholarList;
}

const listOfRankers = iterateStudents()

console.log(listOfRankers);

//With Filter

const scholars = students.map(a => {
  if(a.score > 80) { return a.name}
})
console.log('using Filter', scholars)