/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let greatestNumber = candies[0];
  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > greatestNumber) {
      const temp = greatestNumber;
      greatestNumber = candies[i];
      candies[i] = greatestNumber;
    }
  }

  console.log(greatestNumber);

  const trueFalseArray = [];
  for (let i = 0; i < candies.length; i++) {
    const sum = candies[i] + extraCandies;
    console.log(sum);
    if (sum >= greatestNumber) {
      trueFalseArray.push(true);
    } else {
      trueFalseArray.push(false);
    }
  }

  return trueFalseArray;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
