function noOfDigits(num) {
    // One way
    /*   
      let numArr = num.toString().split("");
      return numArr.length;     
  */
 //Second way
  let i = 0;
  //123 > 0 = true | 12 > 0 = true; | 1 > 0
  while (num > 0) {
    //12 | 1 | 0 |
    num = Math.floor(num/10);
    //1 | 2 | 3
    i++;
  }
  return i;
}

console.log(noOfDigits(756903));
