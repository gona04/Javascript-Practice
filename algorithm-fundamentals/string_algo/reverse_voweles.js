function reverseVowels(word) {
  //using two pointers
  //if there is a vowel at the end we will repace it
  //with the start element
  let start = 0;
  let vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let wordArr = word.split("");
  let end = wordArr.length - 1;

  while (start <= end) {
    while (!vowelSet.has(wordArr[end])) {
      end--;
    }
    while(!vowelSet.has(wordArr[start])) {
        start++
    }
      let temp = wordArr[end];
      wordArr[end] = wordArr[start];
      wordArr[start] = temp;
      end--;
      start++;
  }
  return wordArr.join("");
}

console.log(reverseVowels("Practice")); // prectica
console.log(reverseVowels('Bonjoure')); // benjuoro
console.log(reverseVowels("Sending")); // sindeng
console.log(reverseVowels('Air')); // iAr