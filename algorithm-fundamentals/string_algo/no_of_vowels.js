/* Count the number of vowels */

function countVowels(word) {
    let noOfVowels = 0;
    word.toLowerCase().split("").forEach((letter) => {
        if(letter === 'a' | letter === 'e' | letter === 'i' | letter === 'o' | letter === 'u'){
            noOfVowels++;
        }
    })
    return noOfVowels;
}

console.log(countVowels('voice'))

