// const arr = [1, [2, [3, [4]]]];

// function flattenArray(array) {
//   var arr = [];
//   // console.log(arr);
//   array.forEach((instance) => {
//     // 1st iterattion === 1 | 2nd iteration [2,[3,[4]]]
//     if (Array.isArray(instance)) {
//       //2nd true
//       arr = arr.concat(flattenArray(instance)); //
//       console.log(arr);
//     } else {
//       arr.push(instance); //1
//     }
//   });
//   console.log("arr before return", arr);
//   return arr;
// }

// flattenArray(arr);

// console.log(flattenArray(arr)); // [1, 2, 3, 4]


let count =0;
function deepCount(array) {
    let arr = [];
  array.forEach((a) => {
    if(Array.isArray(a)) {
        arr = arr.concat(deepCount(a));
    } 
    else {arr.push(a);count++;}
    
  });
  return arr
}

console.log(deepCount([1, [2, 5], 6]), `count is ${count}`)
