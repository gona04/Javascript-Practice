/**
 * @param {string} s
 * @return {boolean}
 */
let counting = 1;
var isValid = function (s) {
    counting++;
    let stack = [];
    const isClosing = new Set().add('}').add("]").add(")");
    const isMaching = new Map().set("{", "}").set("(" , ")").set("[", "]");

    for(let i = 0; i < s.length; i++) {
        if((stack.length === 0) && (isClosing.has(s[i]))) return false;
        else if(isMaching.has(s[i])) {
            stack.push(s[i]);
        } else {
             const top = stack.pop();
             if(isMaching.get(top) !== s[i]) return false;
        }
    }

    if(stack.length === 0) return true;
    else return false;


};
console.log(counting);
console.log(isValid("()[]{}")); // 1 true - correct
console.log(counting);
console.log(isValid("(}")); // 2 false - correct
console.log(counting);
console.log(isValid("([])")); //3 true - correct
console.log(counting);
console.log(isValid("([]){")); //4 false - correct
console.log(counting);
console.log(isValid("}()[]")); //5 false - corrcect
console.log(counting); 
console.log(isValid(")(){}")); //6 false - correct 
console.log(counting);
console.log(isValid("]")); //7 false = correct