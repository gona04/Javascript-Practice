/* 
Given a number see if the opposite of that number is true 
Eg: 121 == 121 
122 !== 221 
*/

function reverseNum(num) {
    let tempNum = num;
    let reverse = 0;
    while(tempNum > 0) {
        let remainder = tempNum%10 // 121%10 = 1 | 12%10 = 2 | 1%10 = 1
        reverse = reverse *10 +remainder;
        tempNum = Math.floor(tempNum/10) // 121/10 = 12 | 1/10 = 0
    }
    if(reverse === num) return true
    else return false
}

console.log(reverseNum(11))