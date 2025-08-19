/* 
Type: Two Pointers — Opposite Ends (Checking Palindrome)
Question:
Given a string, determine if it is a palindrome
 (reads the same forward and backward) using the two-pointer technique. 
*/

wordOne = "racecar"  // Answer: true  
wordTwo = "hello"  // Answer: false
wordThree = 'Yummuy'
wordFour = "madam"     // true
wordFive = "level"     // true
wordSix = "radar"     // true
wordSeven = "civic"     // true
wordEight = "rotor"     // true
wordNine = "kayak"     // true
wordTen = "refer"     // true
wordEleven = "deified"   // true
word12 = "rotator"   // true
word13 = "repaper"   // true
word14 = "reviver"   // true
word15 = "noon"      // true
word16 = "mom"       // true
word17 = "dad"       // true
word18 = "pop"       // true
word19 = "eye"       // true
word20 = "wow"       // true
word21 = "bob"       // true
word22 = "sis"       // true
word23 = "tot"       // true

//One inside the other is not what we want
function findPalindromeLong(word) {
    let isPalindrome = false;
   let wordArray = word.toLowerCase().split("");
    for(let left = 0; left < wordArray.length; left++) {
        let right = wordArray.length -1;

        while(right < left) {
            if(wordArray[left].match(wordArray[right])) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
                right--
            }
        }
    } 
    return isPalindrome
}

//Correct solution for two pointers
function findPalindrome(word) {
    let isPalindrome = true;
    let wordArray = word.toLowerCase().split("");
    let left = 0;
    let right = wordArray.length -1;

    while(left < right) {
        if(!wordArray[left].match(wordArray[right])) isPalindrome = false;
        left++;
        right--;
    }

    return isPalindrome;
}

console.log(findPalindrome(wordOne))
console.log(findPalindrome(wordTwo))
console.log(findPalindrome(wordThree))
console.log(findPalindrome(wordFour))
console.log(findPalindrome(wordFive))
console.log(findPalindrome(wordSix))
console.log(findPalindrome(wordSeven))
console.log(findPalindrome(wordEight))
console.log(findPalindrome(wordNine))
console.log(findPalindrome(wordTen))
console.log(findPalindrome(wordEleven))
console.log(findPalindrome(word12))
console.log(findPalindrome(word14))
console.log(findPalindrome(word15))
console.log(findPalindrome(word16))
console.log(findPalindrome(word17))
console.log(findPalindrome(word18))
console.log(findPalindrome(word19))
console.log(findPalindrome(word20))
console.log(findPalindrome(word21))
console.log(findPalindrome(word22))
console.log(findPalindrome(word23))

