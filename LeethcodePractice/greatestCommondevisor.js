var gcdOfStrings = function (str1, str2) {
  const gcd = str1.length % str2.length;
  console.log(gcd);
  if (str1.length > str2.length) {
    return str1.split("").splice(0, gcd);
  } else {
    return str2.split("").splice(0, gcd);
  }
};

console.log(gcdOfStrings("ABAB", "ABAB")); // Output: "AB"
