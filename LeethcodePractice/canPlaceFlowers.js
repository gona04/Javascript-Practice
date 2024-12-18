/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let setOfZero = 0;
  let first = flowerbed.indexOf(0);
  let last = flowerbed.lastIndexOf(0);
  if (first !== 0 && last - first + 1 > 1) {
    for (let i = first; i <= last; i++) {
      if (flowerbed[i] == 1) {
        console.log("redefine first and last");
      } else {
        if ((last - first + 1) % 3 == 0) {
          setOfZero = (last - first + 1) / 3;
          console.log("Set of zeros " + setOfZero);
        }
      }
    }
  }

  if (n <= setOfZero) {
    return true;
  } else {
    return false;
  }
};

console.log(canPlaceFlowers([1, 0, 0, 1, 0, 0, 0, 1], 2));
