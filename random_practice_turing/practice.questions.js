/* function reverseWords(word) {
  let wordArray = word.split("");

  let reverseWord = [];
  let i = wordArray.length;

  while (i >= 0) {
    reverseWord.push(wordArray[i]);
    i--;
  }
  return reverseWord.join("");
}


console.log(reverseWords("hello world"));  */// "olleh dlrow"

/* 
Q2. First Unique Character (Easy – 5 mins)
Write a function that returns the first non-repeating character in a string. 
Return null if none found.
 */


/* function firstUnique(letters) {
    let unique = []
   let l = {};
    letters.split("").forEach(a => {
        if(l[a] !== undefined) { l[a] += 1 }
        else l[a] = 1
    })

    Object.keys(l).forEach(a => {
        if(l[a] == 1) unique.push(a);
    })

    return unique;
}

console.log(firstUnique("aabbccddeef"))
console.log(firstUnique("aabbccdef")) */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}